const configuration = {
  //NAVIGATION BAR ----------------------------------------

  showNavigationbar: true,

  //MAIN VIEW ----------------------------------------

  //Personal information
  FirstName: "Hashir",
  MiddleName: "",
  LastName: "Shoaib",
  emailAddress: "hashirshoaeb@gmail.com",
  devDesc:
    " Engineer | Programmer | Web Developer | Photographer | Athlete | Artist ",

  //Background
  backgroundType: "gradient",
  plainBackgroundMode: "daylight",
  gradientColors: "#EE7752, #E73C7E, #23A6D5, #23D5AB",
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

  //ABOUT SECTION ----------------------------------------

  aboutHeading: "About Me",
  //If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
  //a) your Instagram username (i.e:profilePictureLink:"johnDoe123",)
  //b) a link to an hosted image you want to use as your personal picture (i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",)
  //If you do not want any picture to be displayed, just leave it empty :)
  profilePictureLink: "hashirshoaeb",
  aboutDescription:
    "I'm a Computer Engineer from NUST CEME, Pakistan with 3+ years of experience in web development. I’m currently the Vice President of the student body at Emerging Technologies Research Lab(ETL) and used to be an Intern at RiseTech. I'm passionate about teaching machines how to think",

  //PROJECTS SECTION ----------------------------------------
  projectHeading: "Recent Projects",
  gitHubLink: "https://api.github.com/users/",
  gitHubQuery: "/repos?sort=updated&direction=desc",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  projectsLength: 4,

  //BLOG SECTION ----------------------------------------
  showBlog: false,

  //SKILLS SECTION ----------------------------------------
  showSkills: true,
  hardSkills: [
    { name: "Java", value: 80 },
    { name: "C#", value: 80 },
    { name: "C/C++", value: 80 },
    { name: "Python", value: 80 },
    { name: "JavaScript", value: 80 },
    { name: "HTML/CSS", value: 80 },
    { name: "SQL", value: 80 },
    { name: "React", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 80 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 80 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 80 },
  ],

  //GET IN TOUCH SECTION ----------------------------------------

  showGetInTouch: true,

  //FOOTER SECTION ----------------------------------------

  footerMessage:
    "Officia proident pariatur sint tempor ipsum ut reprehenderit aliquip.Amet veniam et ea enim aute ullamco elit reprehenderit irure officia duis esse. Deserunt quis ad est nostrud nostrud proident ea eu ad",
};

export default configuration;
