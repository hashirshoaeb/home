# Summary
Personal website, published at https://jpromeror.github.io/website.

# Editing content
- Text, links, projects and skills: `src/editable-stuff/config.js`.
- Publications: add or remove PubMed IDs and bioRxiv DOIs in `src/editable-stuff/publications.json`,
  then run `npm run fetch-publications`. This looks up each paper and saves the details to
  `publications.generated.json` (do not edit that file by hand). Deploying runs this step automatically.

# Running
Requires Node 22 and npm 10.

```
npm install
npm start        # local preview
npm test         # checks
npm run deploy   # refresh publications, build, and publish to GitHub Pages
```

# Credit
The original template was developed by [Hashir Shoaib](https://hashirshoaeb.com/) and is hosted on this [webpage](https://github.com/hashirshoaeb/home).
