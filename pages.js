const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://mogarcia626.github.io/moustafa-personal-site.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "main",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
