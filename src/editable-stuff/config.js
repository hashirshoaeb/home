// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sanjit",
  middleName: "",
  lastName: "Pingili",
  message: "Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sanjitpingili",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/sanjitpingili",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/sanjit_pingili/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sanjit-pingili-14b04a1aa/",
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
  imageLink: require("../editable-stuff/propic.jpg"),
  imageSize: 375,
  message:
    "My name is Sanjit Pingili. I study computer science at the Georgia Institute of Technology with a graduation date of 2025.  I'm strongly passionate about making an impact on my community. I'm looking to pursue a career in software development while making a difference. I'm currently looking for internships for the Summer of 2024 in software development.",
  resume: "https://docs.google.com/document/d/1_HVTCPyRKQuD7ft8mEf06yC128IU8N1livofKId6Fl8/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "SanjitPingili", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Python", value: 70 },
    { name: "SQL", value: 60 },
    { name: "Data Structures", value: 95 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 80 },
    { name: "HTML/CSS", value: 90 },
    { name: "C#", value: 75 },
    { name: "GraphQL", value: 50},
    { name: "AWS", value: 60 },
    { name: "ASP.NET", value: 90 },
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
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering Internships! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "spingili3@gatech.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/cs.png'),
      date: 'June 2023 - August 2023',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/ge.png'),
      date: 'May 2022 - August 2022',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/gt.jpeg'),
      date: 'January 2022 - May 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
