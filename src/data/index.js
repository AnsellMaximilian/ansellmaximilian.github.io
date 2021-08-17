const { getFromArray } = require("./utils");

const technologies = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/react/react.png",
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/css/css.png",
  },
  {
    name: "Rails",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/rails/rails.png",
  },
  {
    name: "Ruby",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/ruby/ruby.png",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/mongodb/mongodb.png",
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/mysql/mysql.png",
  },
  {
    name: "Sass",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/sass/sass.png",
  },
  {
    name: "Firebase",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/firebase/firebase.png",
  },
  {
    name: "Typescript",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/typescript/typescript.png",
  },
  {
    name: "HTML",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/html/html.png",
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/figma/figma.png",
  },
  {
    name: "NodeJS",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/nodejs/nodejs.png",
  },
  {
    name: "ExpressJS",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/express/express.png",
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/bootstrap/bootstrap.png",
  },
  {
    name: "Laravel",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/laravel/laravel.png",
  },
  {
    name: "VueJS",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/vue/vue.png",
  },
  {
    name: "Javascript",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/javascript/javascript.png",
  },
  {
    name: "PHP",
    icon: "https://raw.githubusercontent.com/github/explore/master/topics/php/php.png",
  },
];
module.exports = {
  title: "Ansell Maximilian",
  projects: [
    {
      name: "Dailee",
      type: "Task Management App",
      description:
        "A task management app made using ReactJS as the front-end and Google's Firebase as the backend. Complete with authentication, you can keep track of tasks and cross them off your list as you complete them. MaterialUI was utilized in the creation of some parts of the app.",
      longDescriptionItems: [
        "A CRUD application made with ReactJS and powered by Firebase for data storage and authentication. Firebase's Firestore is used to store relevant data, which is personalized for each user using Firebase Authentication&ndash;with register, login, and logout abilities.",
        "MaterialUI was used for some of the styling of the app and to accelerate creation of interactive components, such as dropdowns and modals.",
      ],
      thumbnail: {
        src: "dailee.png",
        alt: "dailee app preview",
      },
      stackItems: getFromArray(
        technologies,
        ["React", "Sass", "Firebase", "Typescript"],
        "name"
      ),
    },
    {
      name: "Personal Portfolio",
      type: "Developer Profile",
      description:
        "My personal developer portfolio I deployed in my special repository on my Github account. Sass was used to style this website to help keep the code organized and modular. This website was first designed by me on a free online application Figma.",
      longDescriptionItems: [
        "My personal portfolio website I designed using Figma. I then translated the design into HTML and CSS which I compiled from Sass. Some interactivity was also added with Javascript compiled from Typecript, so a build step for compiling both Sass and Typescript was added to make development faster.",
        "I also played around with animating SVGs. Learned about the difference from animating regular elements in HTML and SVG's own box model.",
      ],
      thumbnail: {
        src: "portfolio.png",
        alt: "portfolio website preview",
      },
      stackItems: getFromArray(
        technologies,
        ["HTML", "Sass", "Figma", "Typescript"],
        "name"
      ),
    },
    {
      name: "Rumah Sehat",
      type: "Admin Website",
      description:
        "A website I created for a data entry job I have. I use this to manage data I deal with a lot. This is primarily an interface for a database created with MongoDB with basic CRUD and search functionalities. This website was styled using bootstrap and sass.",
      longDescriptionItems: [
        "A full-stack website created using the ExpressJS framework. MongoDB was used as the database for which all CRUD operations are available through the Mongoose ORM. An authentication system was built for this site from scratch using PassportJS's password strategy. The styling of the website was created purely out of vanilla Bootstrap.",
      ],
      thumbnail: {
        src: "rumah-sehat.png",
        alt: "Rumah Sehat preview",
      },
      stackItems: getFromArray(
        technologies,
        ["NodeJS", "ExpressJS", "Sass", "Bootstrap"],
        "name"
      ),
    },
    {
      name: "Attack on Titan API",
      type: "CRUD API",
      description:
        "A CRUD API about the show Attack on Titan created using Laravel and secured using Sanctum. A front-end application made with VueJS was also created to display documentation and preview of the API data.",
      longDescriptionItems: [
        "A CRUD API about the show Attack on Titan created using Laravel and secured using Sanctum. All GET operations are avaliable for the resources. For DELETE, POST, and PUT operations, a token with administrative abilities is required, which is generated each time an admin logs into the API.",
        "A front-end application made with VueJS was also created to display documentation and preview of the API data. The application also has a full stateful authentication system by storing the token in local storage after each login and including a Bearer Authorization token for each API request, so CRUD operations are also available through the front-end interface.",
      ],
      thumbnail: {
        src: "attack-on-titan-api.png",
        alt: "Attack on Titan API preview",
      },
      stackItems: getFromArray(
        technologies,
        ["Javascript", "PHP", "Laravel", "VueJS"],
        "name"
      ),
    },
  ],
  skillSets: [
    {
      label: "Experience with:",
      skills: getFromArray(
        technologies,
        [
          "HTML",
          "CSS",
          "Javascript",
          "React",
          "VueJS",
          "Bootstrap",
          "Sass",
          "MySQL",
          "NodeJS",
          "ExpressJS",
          "MongoDB",
        ],
        "name"
      ),
    },
    {
      label: "Familiar with:",
      skills: getFromArray(
        technologies,
        ["Laravel", "Typescript", "Ruby", "Rails"],
        "name"
      ),
    },
  ],
};
