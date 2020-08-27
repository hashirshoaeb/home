const configuration = {
  //NAVIGATION BAR
  showNavigationbar: true,

//MAIN VIEW
  FirstName: "Bibin",
  MiddleName: "",
  LastName: "Varghese",
  devDesc:
     "| Engineer | Entrepreneur | Data Scientist| Teacher | Editor | Programmer  ",


  //Background
  backgroundType: "gradient",
  plainBackgroundMode: "daylight",
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",

  //Social Media Link Icons
icons: [
    {
      image: "fa-github",
      url: "https://github.com/bibinvargheset",
    },
   
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/bibinvargheset/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/bibinvargheset/",
    },
	 {
      image: "fa-facebook",
      url: "https://www.facebook.com/bibinvargheset",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/bibinthekkan/",
    },
	{
      image: "fa-stack-overflow",
      url: "https://stackoverflow.com/users/3561865/bibinvargheset",
    },
  ],

  //ABOUT SECTION
  aboutHeading: "About Me",
  //If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
  //a) your Instagram username (i.e:profilePictureLink:"johnDoe123",)
  //b) a link to an hosted image you want to use as your personal picture (i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",)
  //If you do not want any picture to be displayed, just leave it empty :)
  profilePictureLink: "bibinthekkan",
  aboutDescription:
    " I'm an Electronic Engineer with graduated from CUSAT, Kerala, India, and pursued my M.Tech from Kannur University in Signal processing and Embedded system. I'm passionate about being an Engineer, who solves Challenging problems, using all the possible technologies such as programming, machine learning, statistical analysis, etc, and other practical tools.",


  //PROJECTS SECTION
  projectHeading: "Recent Projects",
  gitHubLink: "https://api.github.com/users/",
  gitHubQuery: "/repos?sort=updated&direction=desc",
  gitHubUsername: "bibinvargheset", //i.e."johnDoe12Gh"
  projectsLength: 4,

  //BLOG SECTION
  showBlog: false,

  //SKILLS SECTION
  showSkills: true,
  hardSkills: [
   
    { name: "Python", value: 60 },
    { name: "Matlab", value: 65 },
    { name: "VHDL", value: 55 },
	{ name: "Tcad", value: 75 },
    { name: "Latex", value: 65 },
    { name: "Data analysis", value: 55 },
    { name: "Engineering", value: 70 },
    { name: "GCP", value: 55 },
    { name: "Excel", value: 75 },
	{ name: "Digital Sales", value: 75 },
    { name: "Operation Management", value: 65 },
    { name: "Ecommerce", value: 75 },	
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 60 },
  ],
 

  //GET IN TOUCH SECTION
  showGetInTouch: true,
  footerMessage:
    "If you have any query or if you just want to say hi, please feel free to email me at",
  emailAddress: "bibinvargheset+git@gmail.com",
};

export default configuration;
