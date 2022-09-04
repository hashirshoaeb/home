// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Salil",
  middleName: "",
  lastName: "Khanna",
  message: " Software Engineer, Professional Procrastinator, and Coffee Addict. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/salil-khanna",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/salil-khanna/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UCrw0LE9SqBVY31v_jo0rIGg",
    },
    {
      image: "fa-envelope",
      url: "mailto:salilkhannawork@gmail.com",
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
  imageLink: require("../editable-stuff/nycProfilePic3.jpg"),
  imageSize: 375,
  message:
    "My name is Salil Khanna. I’m graduating from Northeastern University (Boston) in 2023, I'm based in the New York City Area, and I'm a huge lover of learning. I'm currently seeking out Software Engineering Internships for Winter and Summer 2023.",
  resume: "/documents/resume.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "salil-khanna", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["northeastern-checklist", "northeastern-checklist-flask", "Draw-Note", "salad-spinner"],
  demoLinkArray: ["https://northeasternchecklist.com/", "https://northeasternchecklist.com/", "https://youtu.be/oNP--bx7L1k", "https://salad-spinner.netlify.app/"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/nycProfilePic3.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/nycProfilePic3.jpg"), 
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
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "I'm currently looking for Software Engineering intern opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "salilkhannawork@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer Intern',// Datadog
      width: '25%',
      height: '25%',
      companylogo: require('../assets/img/datadog.png'),
      date: 'Sept 2022 – Present',
      info: "*GoLang *Kafka *Real Time Usage",
      link: "https://www.datadoghq.com",
    },
    {
      role: 'Software Engineer Intern', //Microsoft
      width: '60%',
      height: '60%',
      companylogo: require('../assets/img/microsoft.jpeg'),
      date: 'May 2022 – Aug 2022',
      info: "*C# *.NET *Outlook Notifications",
      link: "https://www.microsoft.com",
    },
    {
      role: 'Technology Analyst Co-op',// Fidelity
      width: '50%',
      height: '50%',
      companylogo: require('../assets/img/fidelity.png'),
      date: 'July 2021 – Dec 2021',
      info: "*Python *Cloud *API Calls",
      link: "https://www.fidelity.com",
    },
    {
      role: 'Teaching Assistant',// Northeastern
      width: '60%',
      height: '60%',
      companylogo: require('../assets/img/northeastern.png'),
      date: 'Jan 2020 – May 2022',
      info: "*Engineering *OOD *Co-op",
      link: "https://www.northeastern.edu",
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
