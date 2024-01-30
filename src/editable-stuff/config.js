// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Charvee Krishna",
  middleName: "",
  lastName: "Nanduri",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/CharveeKrishna",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/charvee-krishna-nanduri/",
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
  imageLink: require("../editable-stuff/Charvee.jpeg"),
  imageSize: 375,
  message:
    "My name is Charvee Krishna Nanduri. A recent graduate of Hyderabad's Vasavi College of Engineering, Charvee holds a bachelor's degree in information technology.Throughout her time in college, she developed a strong passion for competitive coding and participated actively in hackathons. Her dedication over the course of four years paid off when she was able to secure an internship at CISCO.She made a contribution to the 'Supplier Rating in CloudX' project while she was an intern. In addition, through a variety of college projects, Charvee developed her abilities in Python frameworks, web and android development, and more. She has a keen interest in data analytics and a strong desire to use machine learning to automate processes.",
  resume: "https://drive.google.com/file/d/10OqwRGEzHNnGSgvQVNG2U3PmS9I8T8Zc/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "CharveeKrishna", 
  reposLength: 0,
  specificRepos: ["hackerstreak","HSI-classification-using-few-shot-learning","CryptoBytes","MEDICARE"],
};



// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "C", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "Angular", value: 80 },
    { name: "HTML/CSS", value: 55 },
    { name: "Spring", value: 60 },
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
    "I'm currently looking for full-time Software Engineering or Full Stack opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "charveenanduri@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Analyst-Development @ CISCO',// Here Add Company Name
      date: 'AUG 2023 – Present',
    },
    {
      role: 'Technical Intern @ CISCO',
      date: 'FEB 2023 – JULY 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills,  getInTouch, experiences };
