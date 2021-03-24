
const HEADER = "Savannah Joyner";

const NAVBAR_DATA = [
 { id: 1, url: "/", label: "Home" },
 { id: 2, url: "#projects", label: "Projects" },
 { id: 3, url: "about", label: "About" }
];

const BANNER_DATA = {
 HEADING: "Hello!",
 DESCRIPTION: "I'm Savannah Joyner",
 INTRO: "I'm a UX designer/researcher based in Atlanta, Ga. I'm passionate about people finding their purpose and doing the most good with it. I'd like to help make that possible through my work."
};

const PROJECT_DATA = {
 HEADING: "My Work",
 ALL_PROJECTS: "Projects",
 PROJECT_LIST: [
 {
 LABEL: "Georgia Food Deserts",
 DESCRIPTION:
 "To customise the content, technical functionality and scope of your website so that your pages show for a specific set of keyword at the top of a search engine list. In the end, the goal is to attract traffic to your website when they are searching for goods, services or business-related information.",
 URL: "images/dataviz_mock.png",
 PAGE: "{segment === 'cfm' ? 'page' : undefined}",
 NAME: "cfm"
 },
 {
 LABEL: "Atlanta's Vote Changes Politics",
 DESCRIPTION:
 "It is tough but well worth the effort to create clever material that is not promotional in nature, but rather educates and inspires. It lets them see you as a reliable source of information by delivering content that is meaningful to your audience.",
 URL: "images/favicon.png",
 PAGE:"#georgia-food-deserts",
 NAME: "cfm"
 },
 {
 LABEL: "Healthcare Abroad",
 DESCRIPTION:
 "Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",
 URL: "images/favicon.png",
 PAGE:"#georgia-food-deserts",
 NAME: "cfm"
 },
 {
  LABEL: "CFM Sustainable Initiative",
  DESCRIPTION:
  "Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",
  URL: "images/favicon.png",
  PAGE:"#georgia-food-deserts",
  NAME: "cfm"
  }
 ]
};

const ABOUT_DATA = {
 HEADING: "About Me",
 TITLE: "My Background",
 IMAGE_URL: "images/favicon.png"
};

const SOCIAL_DATA = {
 HEADING: "Find me on social media",
 IMAGES_LIST: [
  { IMAGE: "images/instagram-icon.png",
    URL: "https://www.instagram.com/savjoyner/"
  },
  { IMAGE: "images/linkedin-icon.png",
   URL: "https://www.linkedin.com/in/savannah-joyner-5a4b69180/"
  }
 ]
};

const MOCK_DATA = {
 HEADER,
 NAVBAR_DATA,
 BANNER_DATA,
 PROJECT_DATA,
 ABOUT_DATA,
 SOCIAL_DATA,
};
export default MOCK_DATA;