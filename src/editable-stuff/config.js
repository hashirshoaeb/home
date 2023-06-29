// Navigation Bar SECTION
const navBar = {
  show: true,
};


// Main Body SECTION
const mainBody = {
  gradientColors: "#087E8B, #DC7F9B, #3C3C3C, #C1CAD6, #C1839F",
  firstName: "Shawn",
  middleName: "",
  lastName: "Soneja",
  message: "the technologist",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shawn-don-soneja",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shawn-soneja-325521144/",
    },
    /*
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
    */
  ],
};

// Main Body SECTION
const musicBody = {
  gradientColors: "#CAE7B9, #F3DE8A, #EB9486, #7E7F9A, #97A7B3",
  firstName: "Shawn",
  middleName: "",
  lastName: "Soneja",
  message: "the artist",
  icons: [
    {
      image: "fa-soundcloud",
      url: "https://soundcloud.com/user-207519198",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/essexstreetsounds/",
    },
    /*
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
      url: "https://www.linkedin.com/in/shawn-soneja-325521144/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
    */
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
  imageLink: require("../editable-stuff/Headshot.jpg"),
  imageSize: 375,
  message:
`Hey, what's up, I'm Shawn! Professionally, I'm 'functional technologist'.

That is to say, I enjoy both the 'business' and 'technical' sides of solving problems. On one hand, I enjoy supporting sales, research, and strategy generation. And on the other hand, I enjoy the process of *building* solutions, with tools like React, Salesforce, and AWS. 

Currently I'm a Salesforce Consultant at Accenture, where I fulfill a 'Technical Lead' role, and am transitioning into more of a 'Technical Architect / Manager' role. 
  
My professional interests outside of Salesforce & IT Consulting lie in learning about, and finding cool ways to apply the latest technologies. Et al. machine learning, or designing enterprise architecture. 

Oh and on the side of that, I like to (try to) make music, play some sports, and I am an avid enjoyer of adventures. 

Thank you for dropping by! I encourage you to check out some of My Work below! You're also welcome to look at my resume, if you're into that sort of thing`,
  resume: "https://docs.google.com/document/d/1ygVQb7nLXuLV-Q8-zHP4-0miR-1I9hNq/edit?usp=sharing&ouid=108614653152877262110&rtpof=true&sd=true",
};

const musicAbout = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mountain.jpg"),
  imageSize: 375,
  message:
`Hey! I'm impressed you found this page! Well, since you're here, I'm happy let you in on my interests for the arts.
    
I make some music here and there. What kind of music? I'm not really sure myself. I play some guitar (acoustic / electric and bass), some piano, and know how to mess around with a DAW. With all that, I find myself making beats, and have begun to dabble in making songs.

I'm interested in other mediums and creative processes too. That includes things like basic sketching, 2D animation, and writing / storytelling.

For now, though, I only have some beats to show for all of this interest. If you're curious to listen to some of my work, check out SoundCloud and Instagram above `,
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "My Work",
  gitHubUsername: "shawn-don-soneja", //i.e."johnDoe12Gh"
  reposLength: 5,
  specificRepos: ["Hexient","shawn-sf-dev-ed", "SFDC-Eintstein-Sentiment-Analysis", "sfdc-shawn-dev-ed", "react-portfolio-page"],
};

const musicRepos = {
  show: true,
  heading: "My Work",
  gitHubUsername: "shawn-don-soneja", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: ["SoundCloud", "Instagram"],
}

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
    { name: "Javascript", value: 90 },
    { name: "CSS", value: 90 },
    { name: "React", value: 85 },
    { name: "Swift", value: 35 },
    
    { name: "Git & Version Control", value: 90 },
    { name: "Python", value: 75 },
    { name: "Java", value: 65 },

    { name: "PHP", value: 55 },
    
  ],
  softSkills: [
    { name: "Program / Project Management", value: 85 },
    { name: "Strategy Planning", value: 75 },
    { name: "Product Management", value: 75 },
    { name: "Equity Valuation & Market Research", value: 35 },
  ],
  musicHardSkills: [
    { name: "Logic X", value: 90 },
    { name: "FL Studio", value: 85 },
    { name: "Mixing", value: 55 },
    { name: "Guitar", value: 69 },
    { name: "Piano", value: 55 },
    { name: "Music Theory", value: 55 },
  ],
  musicSoftSkills: [
    { name: "Songwriting", value: 35 },
    { name: "Vibes", value: 75 },
    { name: "Ideas", value: 85 },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always open to collaboration, and am happy to chat. Feel free to drop me a line at",
  email: "shawn.soneja85@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, musicBody, musicAbout, about, repos, musicRepos, skills, leadership, getInTouch, experiences,  };
