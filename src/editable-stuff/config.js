// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Bohdan",
  middleName: "",
  lastName: "Sydorenko",
  message: "My Personal Website",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/bsydorenko/",
    },
    {
      image: "fa-telegram",
      url: "https://t.me/badanio/"
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
  imageLink: require("../editable-stuff/bsydorenko.png"),
  imageSize: 400,
  message:
    "My name is Bohdan Sydorenko. I have more than 8 years of experience in software & hardware testing. Experience in implementation of new technologies. Proficient in stages of the Software Development, Testing Life Cycles and Bug Life Cycle.",
  resume: "https://docs.google.com/document/d/1V-kr0gejGMG-8-oP-5b1Gj7gB6crVENaLV0GV6aGDeM/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
// const repos = {
//   show: true,
//   heading: "Recent Projects",
//   gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
//   reposLength: 4,
//   specificRepos: [],
// };

// Leadership SECTION
// const leadership = {
//   show: false,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
//   images: [
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "First slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "Second slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//   ],
//   imageSize: {
//     width:"615",
//     height:"450"
//   }
// };

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Linux", value: 90 },
    { name: "Git", value: 85 },
    { name: "Docker", value: 85 },
    { name: "AWS", value: 90 },
    { name: "Android", value: 90 },
    { name: "Jenkins", value: 65 },
    { name: "JavaScript", value: 65 },
    { name: "Python", value: 65 },
    { name: "Shell Scripting", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 85 },
    { name: "Teamwork", value: 90 },
    { name: "Flexibility", value: 75 },
    { name: "Responsibility", value: 90 },
    { name: "Problem Solving", value: 75 },
    { name: "Organization", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  email: "b.sydorenko@gmail.com"
};

// const experiences = {
//   show: false,
//   heading: "Experiences",
//   data: [
//     {
//       role: 'Software Engineer',// Here Add Company Name
//       companylogo: require('../assets/img/dell.png'),
//       date: 'June 2018 – Present',
//     },
//     {
//       role: 'Front-End Developer',
//       companylogo: require('../assets/img/boeing.png'),
//       date: 'May 2017 – May 2018',
//     },
//   ]
// }

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, skills, getInTouch };
