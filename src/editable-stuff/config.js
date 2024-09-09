// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Patel",
  middleName: "",
  lastName: "Varsha",
  message: " Passionate about making the world a better place with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/varshapateliitdh",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/patel-varsha-b9123320a/",
    }
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "I'm Varsha, a recent grad from Indian Institute of Technology, Dharwad with varied experiences from materials to mechanical design to robotics to AI. I'm a quick learner and an AI enthusiast currently diving into LLMs which generate accurate SQL queries. I'm actively looking for oppurtunities to solve real life problems with my knowledge while also learning new things.",
  resume: "https://drive.google.com/file/d/1xH6SZwtEIFo2wupBNOUj49ssZ4mEHe0r/view?usp=sharing",
};
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "varshapateliitdh"
  reposLength: 2,
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
    { name: "Fusion 360", value: 90 },
    { name: "SolidWorks", value: 75 },
    { name: "C/C++", value: 85 },
    { name: "Python", value: 65 },
    { name: "Data Structures", value: 90 },
    { name: "MATLAB", value: 65 },
    { name: "ROS2", value: 55 },
    { name: "Gazebo", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Leadership", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "varsha.career.forward@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'Jul 2024 – Present',
    },
    {
      role: 'Software Engineering Intern',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'Jan 2024 – Jun 2024',
    },
    {
      role: 'Industrial Design Intern',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'Jan 2023 – Jun 2023',
    },
    {
      role: 'Summer Research Intern',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2022 – Aug 2022',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
