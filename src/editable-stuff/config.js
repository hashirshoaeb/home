// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Naman",
  middleName: "",
  lastName: "Aggarwal",
  message: "INVENTOR. ENGINEER. BLOGGER",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/namanagg/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/namanismyname/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/naman4198",
    },
    {
      image: "fa-youtube",
      url: "https://www.twitter.com/c/bhukkadbros/",
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
  heading: "Get to know me",
  imageLink: require("../editable-stuff/naman img.png"),
  imageSize: 375,
  message:
    "Hi, I am Naman Aggarwal. I’m a graduate of 2019 from GGSIPU at Delhi with a degree in Mechanical and Automation Engineering. I'm most passionate about innovations and technologies.",
  resume: "https://drive.google.com/file/d/1RuUlaiKdRRJf9P3opQuNVUXSU_yn1dV8/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "naman-agg", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/naman img.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/naman img.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"650",
    height:"650"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  tools: [
    { name: "Oracle ERP", value: 85 }, 
    { name: "Mocrosoft Office", value: 90 }, 
    { name: "Solidworks", value: 80 },
    { name: "PTC Creo", value: 70 },
  ],
  hardSkills: [
    { name: "Inventory Control", value: 90 },
    { name: "Material Bottleneck analysis", value: 90 },
    { name: "Supply and Demand planning", value: 90 },
    { name: "Project Management", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Team-Oriented", value: 85 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 95 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get in Touch",
  message:
    "Please feel free to email me at",
  email: "naman.m4444@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Material and Planning Engineer',// Here Add Company Name
      companylogo: require('../assets/img/vivotwo.png'),
      date: 'June 2019 – June 2022',
    },
    {
      role: 'Design Intern',
      companylogo: require('../assets/img/minda.png'),
      date: 'June 2018 – August 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
