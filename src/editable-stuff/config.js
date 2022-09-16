// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Aravind",
  middleName: "",
  lastName: "Subramanian",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Aravind-Subramanian",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/aravindsubramanians/",
    },

    {
      image: "fa-instagram",
      url: "https://www.instagram.com/aravind.subramanian_/",
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
  imageLink: require("../editable-stuff/aravind-subramanian.jpeg"),
  imageSize: 375,
  message:
    "Hello, World. I'm Aravind Subramanian, A Graduate Research Assistant from University of Florida.I'm an experienced software professional who constantly seeks out innovative solutions to problems. In my four years in this industry with Microsoft, I've honed my analytical thinking and collaboration skills, and I love working with a team. *I wanted to steer my career towards software design and development, and hence pursuing Masters , did the following projects to showcase my skills in data structures and algorithms, object oriented design and distributed systems.* I am interested in designing and developing highly available, scalable, and secure distributed software systems.",
  // resume: "../",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Aravind-Subramanian", //i.e."johnDoe12Gh"
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
    { name: "Python", value: 90 },
    { name: "C/C++", value: 65 },
    { name: "Java", value: 50 },
    { name: "HTML/CSS", value: 55 },
    { name: "SQL", value: 80 },
    { name: "MongoDB", value: 80 },
    { name: "PostgreSQL", value: 70 },
    { name: "Shell Scripting", value: 80 },
    { name: "Azure Cloud Services", value: 80 },
    { name: "Git", value: 75 },
  ],
  softSkills: [
    { name: "Software Engineering", value: 80 },
    { name: "Risk Assessment", value: 90 },
    { name: "Gap Analysis", value: 95 },
    { name: "IT Service Managment", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "aravindssubramanian@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Graduate Research Assistant, University of Florida',// Here Add Company Name
      companylogo: require('../assets/img/uf_logo.png'),
      date: 'August 2022 – Present',
    },
    {
      role: 'Sofware Engineer, Intern, University of Florida',// Here Add Company Name
      companylogo: require('../assets/img/uf_logo.png'),
      date: 'April 2022 – August 2022',
    },
    {
      role: 'Customer Engineer',
      companylogo: require('../assets/img/ms-logo.png'),
      date: 'July 2017 – August 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
