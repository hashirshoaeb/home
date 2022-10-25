// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "KP",
  middleName: "",
  lastName: "Yang",
  message: "Building better software through a Generalist lens.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/engr-kpyang",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/engineer-k-yang/",
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
//      i.e: profilePictureLink: require("../editable-stuff/kpyangprofileImage.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kpyangprofileImage.png"),
  imageSize: 375,
  message:
    "Hi there! My name is KP. As a Generalist, I am enthusiastic about the direction technology is headed. On my free time I stay up-to-date with technological trends through personal research. With over 2 years of professional experience building software, I'm most passionate about utilizing current technology to developing software that solve real-world problems.",
  resume: "https://docs.google.com/document/d/1yEdxffQkFaG_ixTwE3yBJUtrHd7PNNNs_fD6hTyiHaA/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "My Recent Repositories",
  gitHubUsername: "engr-kpyang", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  images: [
    { 
      img: require("../editable-stuff/kpyangprofileImage.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/kpyangprofileImage.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"325",
    height:"325"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Javscript", value: 90 },
    { name: "Typescript", value: 80 },
    { name: "Python", value: 85 },
    { name: "Java", value: 70 },
    { name: "ReactJs", value: 90 },
    { name: "Docker/Containers", value: 75 },
    { name: "Serverless", value: 80 },
    { name: "AWS", value: 85 },
    { name: "Node/NPM", value: 95 },
    { name: "PostgreSQL", value: 90 },
    { name: "DynamoDB", value: 70 },
    { name: "Testing", value: 80 },
  ],
  softSkills: [
    { name: "Object-Oriented Programming", value: 80 },
    { name: "Functional Programming", value: 65 },
    { name: "Cloud Development", value: 75 },
    { name: "Agile methodology", value: 90 },
    { name: "Test-driven Development", value: 70 },
    { name: "Domain Driven Design", value: 85 },
    { name: "Event-driven Architecture", value: 75 },
    { name: "Event-storming", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! You can get in touch with me either by email or phone below",
  email: "kpyang2414@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      company: "Calabrio",
      role: 'Associate Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/calabrioLogoRed.png'),
      date: 'October 2021 – July 2022',
    },
    {
      company: "Prime Digital Academy",
      role: 'Full-stack Developer',
      companylogo: require('../assets/img/primelogogreen.png'),
      date: 'May 2021 – September 2021',
    },
  ]
}

// // Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
