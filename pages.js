const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://zalf14.github.io/AmyGarciaPM/";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
