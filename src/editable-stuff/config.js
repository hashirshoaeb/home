// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#374453, #4a5d23, #6b1818, #db8a6c",
  firstName: "Moustafa",
  middleName: "",
  lastName: "Garcia",
  message: " Engineer and Problem Solver. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mogarcia626",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/moustafagarcia/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
    {
      image: "fa-angellist",
      url: "https://angel.co/u/moustafa-garcia-bengochea",
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
  imageLink: require("../editable-stuff/moustafagarcia.jpg"),
  imageSize: 375,
  message: "My name is Moustafa Garcia. I’m a software engineer based in Orlando, FL. I'm passionate about finding new hobbies, learning new skills, and applying them to meaningful projects. Before getting into web development I was a mechanical engineer in the construction industry for nearly 10 years, collaborating on large multidisciplinary projects. In my free time I like to read Sci-Fi and historical fiction, play soccer, and take my kayak out for long-distance rides",
  resume: "https://docs.google.com/document/d/16jpxNcZjfYH1aFq3jV-gLtzgGKbb0s2JlIdkBXY-teQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "mogarcia626", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["mogarcia626/letseat", "mmbarness/home_court","mogarcia626/light_show"],
};

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
    { name: "React", value: 0 },
    { name: "Redux", value: 0 },
    { name: "Javascript", value: 0 },
    { name: "NodeJS", value: 0 },
    { name: "Ruby", value: 0 },
    { name: "Ruby on Rails", value: 0 },
    { name: "HTML/CSS", value: 0 },
    { name: "HTML/Canvas", value: 0 },
    { name: "PostgreSQL", value: 0 },
    { name: "JQuery", value: 0 },
    { name: "MongoDB", value: 0 },
    { name: "Express", value: 0 },
    { name: "Google Maps API", value: 0 },
    { name: "Amazon AWS", value: 0 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 0 },
    { name: "Collaboration", value: 0 },
    { name: "Positivity", value: 0 },
    { name: "Adaptability", value: 0 },
    { name: "Problem Solving", value: 0 },
    { name: "Empathy", value: 0 },
    { name: "Organization", value: 0 },
    { name: "Creativity", value: 0 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering role! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mogarcia626@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Mechanical Engineer at exp',// Here Add Company Name
      companylogo: null,//require('../assets/img/dell.png'),
      date: 'April 2016 – July 2021',
    },
    {
      role: 'Energy Engineer at Alares',
      companylogo: null,//require('../assets/img/boeing.png'),
      date: 'January 2013 – November 2016',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

// export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
