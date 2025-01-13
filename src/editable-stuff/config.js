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
  message: " Decoding the complexities of biology through computational power and algorithms ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jpromeror",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jpromeror/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/jp.romeror/",
    },
    {
      image: "fa-twitter",
      url: "https://www.x.com/jprr91/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jpromero.jpg"),
  imageSize: 375,
  message:
    "Hello! Im Juan Pablo Romero. I receieved my PhD in Applied Engineering / Bioinformatics in 2017 from the University of Navarra. Currently Im a Senior Computational Biologist at 10x Genomics. I've spent a few years trying to understand biology from the side of algorithms and computer science. Im happily married and passionate about all things related to video games and food",
  resume: "https://drive.google.com/file/d/1Hse6ncbdJoFK9dgqcH3b_1eiv7N8HxdY/view?usp=sharing",
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
  reposLength: 1,
  specificRepos: ["EventPointer"],
};


// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
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
  heading: "Get In Touch",
  message:
    "Interested in discussing Computational Biology, Genomics, Transcriptomics, or just want to say hi? Feel free to reach out to me on any of my social media accounts.",
};


const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
