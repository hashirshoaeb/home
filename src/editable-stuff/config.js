// Navigation Bar SECTION// Navigation Bar SECTION
const navBar = {
  show: true,
};

// // Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sharmarke",
  middleName: "",
  lastName: "Nur",
  message: "Passionate about innovation and helping change the world through tech.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/snur206",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sharmarke-nur/",
    },
  ],
};

// // ABOUT SECTION
// // If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
// //a) your Instagram username
// //      i.e:profilePictureLink:"johnDoe123",
// //b) a link to an hosted image
// //      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
// //c) image in "editable-stuff" directory and use require("") to import here,
// //      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
// //d) If you do not want any picture to be displayed, just leave it empty :)
// //      i.e: profilePictureLink: "",
// // For Resume either provide link to your resume or import from "editable-stuff" directory
// //     i.e resume: require("../editable-stuff/resume.pdf"),
// //         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
//
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/"),
  imageSize: 375,
  message:
      "My name is Sharmarke Nur, I am a Code Fellows graduate in Advanced Software Development in Java with SpringMVC & Android. A Java developer with a background in retail and child care. Motivated by innovation and writing code to fully develop an efficient solution(s) to fulfill the clients wants. Also motivated in helping those with disabilities and giving them tools and resources they could use in tech.",
  resume: "https://docs.google.com/document/d/1EgY5kpNITshl7T5TFME7FtMNWacn4hCOB5u-oSDMfAs/edit",
};

// // PROJECTS SECTION
// // Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
// //      i.e: reposLength: 0,
// // If you want to display specific projects, add the repository names,
// //      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "snur206", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// // Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/image0.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/image0.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// // SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 80 },
    { name: "AWS", value: 75 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 75 },
    { name: "HTML/CSS", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 85 },
  ],
};

// // GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
      "I'm currently looking for full-time Software Developing or Java Developing opportunities! If you know of any positions available, if you have any questions, or if you just want to connect, please feel free to email me at snur206@yahoo.com",
  email: "snur206@yahoo.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Imagine Institute, Substitute - Support Staff',// Here Add Company Name
      companylogo: require('../assets/img/'),
      date: 'Mar 2020 – Present',
    },
    {
      role: 'Maka Mini Market, Assistant Manager/Volunteer',
      date: 'Aug 2015 – Sep 2022',
    },
  ]
}
// // Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };