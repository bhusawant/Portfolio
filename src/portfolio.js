// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bhuvan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Bhuvan Sawant Portfolio",
    type: "website",
    // url: "",
  },
};

//Home Page
const greeting = {
  title: "Bhuvan Sawant",
  logo_name: "BhuvanSawant",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1o9ciIDmGIw4jHV_v2cQAjK7WD5C0px44/view?usp=sharing",
  // portfolio_repository: "",
  githubProfile: "https://github.com/bhusawant",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/bhusawant",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bhuvan-sawant-9990b3249/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:bhuvansawant72@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://instagram.com/bhuvansawant?igshid=OGQ5ZDc2ODk2ZA==",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React.js",
        "⚡ Developing attractive web applications using React.js, CSS, SCSS and Bootstrap",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Database and other Tools",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience working on MySQL database",
        "⚡ Experience in using Git and GitHub for collaboration amoung teammates in project",
        "⚡ Used MongoDB database in web development project",
        "⚡ Experience in using Bootstrap for quickly design the website",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:sql",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f06033",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
      ],
    },
    {
      title: "Programming Languages",
      fileName: "FullStackImg",
      skills: [
        "⚡ Using C/C++ language for data structure and algorithm",
        "⚡ Learned Python and made Hotel-Bot project with help of Tkinter, Pyqt5. Also, used flask as a backend in web applications",
        "⚡ Learned object oriented programming and made Grocery Billing System using Java Swing",
        "⚡ Used JavaScript for developing web applictaions",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:c++",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#2A89DA",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#00749C",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/bhuvansawant72/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/bhuvansawant72",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/bhuvansawant72",
    },
    {
      siteName: "Geeksforgeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#009900",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/bhuvansa8xvp",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Thadomal Shahani Engineering College",
      subtitle: "B.E. in Information Technology",
      logo_path: "TSEC_LOGO5.png",
      alt_name: "Thadomal Shahani Engineering College",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I am studing software engineering subjects like DS, Algorithms, DBMS, OS, DEVOPS, CN etc.",
        "⚡ Apart from this, I have done courses on Python, Artificial Inteligence, Git and GitHub.",
        "⚡ In PYEXPO 2.0 Secure place in top 10 teams for Hotel-Bot project. Also, participated in Need For Code 2.0, TECH-A-THON'23, Codeissance'23 and CodeCrush 1.0 hackathons",
      ],
      website_link: "https://tsec.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/XHNBE67W3SHW",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Artificial Intelligence",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U7BA7HXG6KRZ",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Git and GitHub",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/8ZDCAPTESJ4Y",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships",
  description:
    "I have worked with evolving startup as Web Developer Intern. I have also worked with established company as Graphic Designer Intern.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "Brainox Tech",
          company_url: "https://brainoxtech.com/",
          logo_path: "Brainox_Tech_logo.png",
          duration: "June 2023 - Sep 2023",
          location: "Rajasthan, India (Remote)",
          description:
            "Responsibilities: Collaborate with the development team to design, develop, and maintain WordPress websites and web applications. Troubleshoot and resolve technical issues and bugs in WordPress websites. Conduct website testing to ensure cross-browser compatibility and responsiveness. Keep up to date with the latest trends and technologies in WordPress development and implement them when applicable. Collaborate with the design team to ensure the integration of visually appealing and functional designs into WordPress websites.",
          color: "#000000",
        },
        {
          title: "Graphic Designer Intern",
          company: "KnowMerit Private Limited",
          company_url: "https://www.knowmerit.com/",
          logo_path: "KnowMerit_logo.png",
          duration: "June 2023 - July 2023",
          location: "Hyderabad, India (Remote)",
          description:
            "Worked on Canva for designs (instructional designs - math subject). Creating various types of attractive design and logo. Use Canva and figma for designs. Mathematics related educational designs. Make designs and collaborate with backend team.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web application using React.js as frontend and backend using flask or node.js and expres.js with MongoDB database.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Circle-photo.png",
    description:
      "I am available on social media. You can message me, I will reply within 24 hours. I can help you with React and Web development.",
  },
  
  addressSection: {
    title: "Address",
    subtitle:
      "R.B.Jadhav Chawl, near Bhagwan Shiv Shivneri Coop.Hsg.Society, Chakala, Sahar road, Andheri(E), Mumbai - 400099",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/@19.1089647,72.8575446,21z?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
