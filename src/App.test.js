import { render, screen } from "@testing-library/react";
import Publication from "./components/home/Publication";
import publicationList from "./editable-stuff/publications.generated.json";
import publicationIds from "./editable-stuff/publications.json";

test("every listed publication has saved details", () => {
  const ids = [...publicationIds.pubmedIds, ...publicationIds.biorxivDois];
  expect(publicationList.map((publication) => publication.id)).toEqual(ids);
  for (const publication of publicationList) {
    expect(publication.title).toBeTruthy();
    expect(publication.authors.length).toBeGreaterThan(0);
    expect(publication.journal).toBeTruthy();
  }
});

test("publications section shows each paper with a DOI link", () => {
  render(<Publication heading="Selected Publications" SID="scholar-id" />);
  for (const publication of publicationList) {
    expect(screen.getByText(publication.title)).toBeInTheDocument();
    if (publication.doi) {
      expect(screen.getByText(publication.doi)).toHaveAttribute(
        "href",
        `https://doi.org/${publication.doi}`
      );
    }
  }
});
