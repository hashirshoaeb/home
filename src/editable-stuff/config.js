// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Nicolas",
  middleName: "",
  lastName: "Pérez de Olaguer",
  message: " Machine learning engineer, researcher and whatnot",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nicolasperezdeo",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/nico.p.deolaguer",
    },
    {
      image: "fas fa-2x fa-envelope",
      url: "mailto:nicolasperezdeo@gmail.com",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nicolasperezdeolaguer/",
    },
    {
      image: "fa-spotify",
      url: "https://open.spotify.com/user/nichols2309?si=ZcItlRb5R1-klnOSuJL1rg/",
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
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/face_small.png"),
  imageSize: 375,
  message:
    "I am Nicolás Pérez de Olaguer, an engineer from Barcelona based in Berlin. I have graduated in Telecommunications Engineering at the Universitat Pompeu Fabra of Barcelona and I completed a master's degree in Intelligent Adaptive Systems at the University of Hamburg. I focus on applying machine learning and computer vision to real-world problems.",
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
  gitHubUsername: "nicolasperezdeo", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Research that matters",
  message:
    "Throughout my corporative and academic career, I continually sought to apply my knowledge and skills into solutions that positively impact society. I mostly focused on applications in the bio-medical field. Working with cochlear implants, epilepsy prediction, signal processing and medical imaging allowed me to explore a wide range of technologies. The prospect of making an impact through my research keeps me motivated to deliver high-quality work. With this in mind, I am searching for opportunities to further advance my skills and give me a sense of purpose.",
  images: [
    { img: require("../editable-stuff/master.png") },
    { img: require("../editable-stuff/xray.png") },
    { img: require("../editable-stuff/cochlear.jpg") },
    { img: require("../editable-stuff/chimera.gif") },
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Keras / Tensorflow", value: 85 },
    { name: "OpenCV", value: 80 },
    { name: "Git", value: 85 },
    { name: "Docker", value: 65 },
    { name: "Matlab", value: 90 },
    { name: "PyTest", value: 65 },
    { name: "Flask", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 80 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 80 },
    { name: "Organization", value: 95 },
    { name: "Agile/Scrum Methodologies", value: 90 },
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

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
