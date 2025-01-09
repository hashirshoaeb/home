// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kenisha",
  middleName: "",
  lastName: "Perera",
  message: "Passionate about helping people with technology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kenisha-p",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kenishap/",
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
  imageLink: require("../editable-stuff/kenishap.jpg"),
  imageSize: 375,
  message:
    "Hey, I'm Kenisha! I’m a Computer Science student at the University of Waterloo. I'm most passionate about improving accessibility and user experience in the world of technology! In my free time, I like to lift weights 🏋️‍♀️, crochet 🧶, and find new ways to let out my creative energy!",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
};

/* // Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
}; */

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 70 },
    { name: "SQL", value: 87 },
    { name: "Data Structures", value: 90 },
    { name: "C/C++", value: 70 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "HTML/CSS", value: 70 },
    { name: "C#", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 100 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 95 },
    { name: "Creativity", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for internship opportunities in Software Development for Summer 2025! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "kenisha.perera@uwaterloo.ca",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      companyname: "Harbinger Motors",
      role: "Fullstack Software Developer", // Here Add Company Name
      companylogo: require("../assets/img/harbingerlogo.jpg"),
      date: "September 2024 – December 2024",
    },
    {
      companyname: "Emailgistics",
      role: "Fullstack Software Developer",
      companylogo: require("../assets/img/emailgisticslogo.png"),
      date: "September 2023 – December 2023",
    },
    {
      companyname: "Index Exchange",
      role: "Backend Software Developer",
      companylogo: require("../assets/img/indexexchangelogo.jpg"),
      date: "May 2022 – August 2022",
    },
    {
      companyname: "Intelex Technologies",
      role: "Fullstack Software Developer",
      companylogo: require("../assets/img/intelexlogo.png"),
      date: "September 2021 – December 2021",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
