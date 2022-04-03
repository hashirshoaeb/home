// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ce7700, #77165c, #ff7f7f, #ecf0f1",
  firstName: "Jeremiah",
  middleName: "",
  lastName: "Bonney",
  message: " Senior Software Engineer specializing in Distributed Builds ",
  icons: [
    {
      image: "fa-gitlab",
      url: "https://gitlab.com/jbonney",
    },
    {
      image: "fa-github",
      url: "https://github.com/jeremiahbonney",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jeremiah-bonney-77231180",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/bonneyandclyde/",
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
  profilePictureLink: "ddr3_jram",
  imageSize: 375,
  message:
    "My name is Jeremiah Bonney and I'm a Senior Software Engineer at Bloomberg LP. I work on creating open source distributed build tools using the Remote Execution API. You can find most of our projects at https://gitlab.com/BuildGrid including BuildGrid, a REAPI server implementation and RECC, a caching compiler wrapper which leverages the REAPI to distribute and cache compilations.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jeremiahbonney", //i.e."johnDoe12Gh"
  gitLabUsername: "jbonney",
  reposLength: 0,
  specificRepos: [ // TODO update Project/ProjectCard to actually use this new info
  {
    source: "gitlab",
    org: "buildgrid",
    repo: "buildgrid",
  },
  {
    source: "gitlab",
    org: "buildgrid",
    repo: "recc",
  },
  {
    source: "gitlab",
    org: "buildgrid",
    repo: "buildbox%2Fbuildbox-casd",
  },
  {
    source: "gitlab",
    org: "buildgrid",
    repo: "buildbox%2Fbuildbox-worker",
  },
  {
    source: "gitlab",
    org: "buildgrid",
    repo: "bgd-browser",
  },
  {
    source: "github",
    org: "jeremiahbonney",
    repo: "Neural-Key-Exchange-Protocol",
  },
  ],

};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
//    { 
//      img: require("../editable-stuff/jeremiahbonney.png"), 
//      label: "First slide label", 
//      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//    },
//    { 
//      img: require("../editable-stuff/jeremiahbonney.png"), 
//      label: "Second slide label", 
//      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//    },
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
  techincalSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 80 },
    { name: "Bash/Shell", value: 90 },
    { name: "Open Source Development", value: 65 },
    { name: "Build Tools", value: 85 },
    { name: "Perl", value: 70 },
  ],
  otherSkills: [
    { name: "Coffee Drinking", value: 90 },
    { name: "Coffee Making", value: 85 },
    { name: "Ordering Take-out", value: 80 },
    { name: "Just Dance", value: 75 },
    { name: "Guitar Hero", value: 70 },
    { name: "Party-Parrot Usage", value: 70 },
    { name: "Magic Tricks", value: 50 },
    { name: "Picking a song when given AUX", value: 5 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
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
