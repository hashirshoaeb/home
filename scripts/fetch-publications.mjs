// Fetches publication details for the IDs listed in
// src/editable-stuff/publications.json and writes them to
// src/editable-stuff/publications.generated.json, which the site imports.
//
// Run with `npm run fetch-publications` (also runs automatically on deploy).
// If a lookup fails, the entry already in the generated file is kept, so a
// temporary API outage never removes a paper from the site.

import { readFile, writeFile } from "node:fs/promises";

const dir = new URL("../src/editable-stuff/", import.meta.url);
const idsFile = new URL("publications.json", dir);
const outFile = new URL("publications.generated.json", dir);

const PUBMED_API =
  "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=";
const BIORXIV_API = "https://api.biorxiv.org/details/biorxiv/";

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", "#39": "'" };

const cleanText = (text = "") =>
  text
    .replace(/<[^>]+>/g, "")
    .replace(/&(amp|lt|gt|quot|apos|#39);/g, (_, name) => ENTITIES[name])
    .replace(/\s+/g, " ")
    .trim();

const getJson = async (url) => {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`HTTP ${response.status} from ${url}`);
  return response.json();
};

const fetchPubmed = async (ids) => {
  const found = new Map();
  if (!ids.length) return found;
  const { result = {} } = await getJson(PUBMED_API + ids.join(","));
  for (const id of ids) {
    const item = result[id];
    if (!item || item.error || !item.title) continue;
    const doi = (item.articleids || []).find((a) => a.idtype === "doi");
    found.set(id, {
      id,
      source: "pubmed",
      title: cleanText(item.title).replace(/\.$/, ""),
      authors: (item.authors || []).map((a) => a.name),
      journal: item.fulljournalname || item.source || "",
      year: (item.pubdate || "").slice(0, 4),
      doi: doi ? doi.value : null,
      url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
    });
  }
  return found;
};

const fetchBiorxiv = async (doi) => {
  const { collection = [] } = await getJson(BIORXIV_API + doi);
  const item = collection[collection.length - 1]; // latest version
  if (!item || !item.title) return null;
  return {
    id: doi,
    source: "biorxiv",
    title: cleanText(item.title).replace(/\.$/, ""),
    authors: (item.authors || "")
      .split(";")
      .map((name) => name.trim())
      .filter(Boolean),
    journal: "bioRxiv (preprint)",
    year: (item.date || "").slice(0, 4),
    doi: item.doi || doi,
    url: `https://doi.org/${item.doi || doi}`,
  };
};

const main = async () => {
  const { pubmedIds = [], biorxivDois = [] } = JSON.parse(await readFile(idsFile, "utf8"));

  let previous = [];
  try {
    previous = JSON.parse(await readFile(outFile, "utf8"));
  } catch {
    // first run: nothing cached yet
  }
  const cached = new Map(previous.map((entry) => [entry.id, entry]));

  const fresh = new Map();
  try {
    for (const [id, entry] of await fetchPubmed(pubmedIds)) fresh.set(id, entry);
  } catch (error) {
    console.warn(`PubMed lookup failed: ${error.message}`);
  }
  for (const doi of biorxivDois) {
    try {
      const entry = await fetchBiorxiv(doi);
      if (entry) fresh.set(doi, entry);
    } catch (error) {
      console.warn(`bioRxiv lookup failed for ${doi}: ${error.message}`);
    }
  }

  const publications = [];
  const missing = [];
  for (const id of [...pubmedIds, ...biorxivDois]) {
    if (fresh.has(id)) {
      publications.push(fresh.get(id));
    } else if (cached.has(id)) {
      console.warn(`Using the previously saved entry for ${id}`);
      publications.push(cached.get(id));
    } else {
      missing.push(id);
    }
  }

  if (missing.length) {
    console.error(`No data found for: ${missing.join(", ")}. Check the IDs in publications.json.`);
    process.exit(1);
  }

  await writeFile(outFile, JSON.stringify(publications, null, 2) + "\n");
  console.log(`Saved ${publications.length} publications to ${outFile.pathname}`);
};

main();
