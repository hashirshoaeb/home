const config = {
  //NAVIGATION BAR
  showNavigationbar: true,

  //MAIN VIEW
  FirstName: "Hashir",
  MiddleName: "",
  LastName: "Shoaib",
  devDesc: " Passionate about teaching machines how to think ",

  //Background
  backgroundType: "gradient",
  plainBackgroundMode: "daylight",
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",

  //Social Media Link Icons
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/hashirshoaeb",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
  ],

  //BLOG SECTION
  showBlog: false,
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
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "My name is Hashir Shoaib. I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering. I see myself as a Machine Learning Engineer and Web Developer. In my free time I like working on open source projects and learning new things. ",
};

// PROJECTS SECTION
const repos = {
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4, // setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none
  specificRepos: [], // if you want to display specfic projects, add the repository names, i.e ["project-1", "project-2"]
};

// SKILLS SECTION
const skills = {
  show: true,
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
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

export { config, getInTouch, skills, repos, about };
