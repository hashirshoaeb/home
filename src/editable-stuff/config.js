// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#0A2347, #384967, #0071D9, #71439A, #D41E3D, #F2BE19",
  firstName: "Juan P.",
  middleName: "",
  lastName: "Romero",
  message: " Unlocking the complexity of biology by harnessing computer science and cutting-edge algorithms ",
  icons: [
    {
      image: "fa-brands fa-github",
      label: "GitHub",
      url: "https://github.com/jpromeror",
    },
    {
      image: "fa-brands fa-linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jpromeror/",
    },
    {
      image: "fa-brands fa-x-twitter",
      label: "X",
      url: "https://www.x.com/jprr91/",
    },
    {
      image: "fa-solid fa-graduation-cap",
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=DSGeebYAAAAJ&hl=en"
    },
  ],
};

// ABOUT SECTION
// imageLink: an image in "editable-stuff" via require(""), a hosted image URL, or "" for no picture.
// resume: a link to your resume.

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jpromero.jpg"),
  imageSize: 375,
  message:
    "Hello! I'm Juan Pablo. I received my PhD in Applied Engineering and Bioinformatics from the University of Navarra in 2017. I have dedicated several years to understanding biology through the lens of algorithms and computer science. I'm happily married and passionate about video games and food",
  resume: "https://drive.google.com/file/d/1Hse6ncbdJoFK9dgqcH3b_1eiv7N8HxdY/view?usp=sharing",
};

// PUBLICATIONS SECTION
// The list of papers lives in publications.json (PubMed IDs and bioRxiv DOIs).
// After editing it, run `npm run fetch-publications` (deploying does this automatically).
const publications = {
  show: true,
  heading: "Selected Publications",
  ScholarID: "DSGeebYAAAAJ",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "jpromeror", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["jpromeror/EventPointer","10XGenomics/HumanColonCancer_VisiumHD",
    "jpromeror/SC_KidneyOrganoid_ACE2","jpromeror/FantasyDrafter"],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "R", value: 90 },
    { name: "Python", value: 75 },
    { name: "Bash", value: 80 },
    { name: "SQL", value: 85 },
    { name: "Rust", value: 20 },
    { name: "Github", value: 80 },
  ],
  softSkills: [
    { name: "Single Cell RNA-seq", value: 90 },
    { name: "Single Cell ATAC-seq", value: 85 },
    { name: "Single Cell Immune Profiling", value: 75 },
    { name: "Spatial Transcriptomics", value: 90 },
    { name: "In-Situ", value: 85 },
    { name: "Bulk RNA-seq", value: 90 },
    { name: "Bulk ATAC-seq", value: 85 },
    { name: "Whole Exome/Genome Sequencing", value: 75 },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me!",
  message:
    "Feel free to reach out to me on any of my social media accounts.",
};


export { navBar, mainBody, about, publications, repos, skills, getInTouch };
