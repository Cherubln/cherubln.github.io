import { ProjectType } from "../types/ProjectType";
import floraFablesThumbnail from "../assets/flora-fables.png";
import dialogueThumbnail from "../assets/dialog.png";
import uplusThumbnail from "../assets/uplus-web.png";
import helpCenterThumbnail from "../assets/helpcenter.png";
import clientPortalThumbnail from "../assets/client-data.png";
import gameHubThumbnail from "../assets/game-hub.png";
import selfCareThumbnail from "../assets/self-care.png";
import helpCenterScreenShot from "../assets/help-screenshot.png";
import uplusScreenShot from "../assets/uplus-screenshot.png";
import gameScreenShot from "../assets/game-screenshot.png";
import dashooardScreenShot from "../assets/dashboard-screenshot.png";
import codeHillsThumbnail from "../assets/code-hills.png";

const projectSet: ProjectType[] = [
  {
    category: "web",
    name: "Flora Fables",
    description:
      "Flora Fables is an online market web app that offers a variety of flowers and vase-covered plants for sale. It aims to solve some real world problems, such as: - supporting small businesses and local communities by connecting customers with independent florists and growers, and providing them with a platform to showcase their work and earn income.",
    screenshots: "",
    slug: "flora-fables",
    sourceCode: "https://github.com/Cherubln/flora-fables",
    stack: ["React", "TS", "NextJS", "Tailwind"],
    thumbnail: floraFablesThumbnail,
  },

  {
    category: "mobile",
    description:
      "Self-care is an app that connects patients and doctors easily. Patients can find, chat, and book doctors from various departments. This app saves time and money, reduces health care load, and improves care quality. Self-care is for anyone who needs medical help, especially those in remote, busy, or limited situations. Self-care promotes health awareness, prevention, and wellness in society.",
    name: "Self-Care",
    screenshots: "",
    slug: "self-care",
    sourceCode: "https://github.com/Cherubln/self-care",
    stack: ["TS", "React", "Expo", "RN", "Figma"],
    thumbnail: selfCareThumbnail,
  },
  {
    category: "web",
    description:
      "Dialogue is a chat app platform that lets users chat with each other in real time. Users can create or access their account and start conversations with others. Dialogue is helpful for anyone who wants to keep in touch with their contacts, whether they are friends, family, coworkers, or anyone else.",
    name: "Dialogue",
    screenshots: "",
    slug: "dialogue",
    sourceCode: "https://github.com/Cherubln/dialogue",
    stack: ["TS", "React", "NextJS", "DaisyUI"],
    thumbnail: dialogueThumbnail,
    website: "https://dialogue-app-production.up.railway.app/",
  },
  {
    category: "web",
    description:
      "The app is a comprehensive solution for HR managers who work with software developers. It allows them to create and track performance goals, provide feedback, identify skill gaps and reward achievements. The app also helps HR managers to handle common issues that arise in the development process, such as team collaboration, code quality, and project management. The app aims to improve the productivity of developers, as well as the quality and efficiency of the software they produce.",
    name: "HR Management",
    screenshots: "",
    slug: "employees-management",
    sourceCode: "https://github.com/Code-Hills/codehills-dev-profile-fe",
    stack: ["TS", "React", "Tailwind", "Figma"],
    thumbnail: codeHillsThumbnail,
    website: "",
  },

  {
    category: "web",
    description:
      "Game Portal is a useful tool for gamers who want to find and explore different games. It allows users to filter games by supported device (such as PC, console, mobile, etc.) or by genres (such as sports, adventure, puzzle, etc.). Users can also search for a specific game by typing its name or keywords in the search bar. The app supports color mode switch, which means users can choose between light and dark themes according to their preference.",
    name: "Game Portal",
    screenshots: gameScreenShot,
    slug: "game-portal",
    sourceCode: "https://github.com/Cherubln/game-portal",
    stack: ["TS", "React", "ChakraUI"],
    thumbnail: gameHubThumbnail,
    website: "https://cherubln.github.io/game-portal",
  },

  {
    category: "web",
    description:
      "Uplus is a company that offers innovative and convenient products for various needs. Their website showcases their products, how to access them, their mission and goals, and how people can benefit from using them. The website is designed to be user-friendly, informative, and engaging. It invites visitors to explore the products, learn more about the company, and contact them for any inquiries or feedback.",
    name: "Uplus Website",
    screenshots: uplusScreenShot,
    slug: "uplus-website",
    stack: ["JS", "React", "Tailwind"],
    thumbnail: uplusThumbnail,
    website: "https://uplus.rw",
  },
  {
    category: "web",
    description:
      "This is a help center for Uplus company. It aims to improve customer satisfaction, loyalty and retention, as well as reduce customer service costs and increase efficiency. Customers can use it to find answers, solutions and resources for their questions, problems or feedback. They can also learn how to use the products or services better with tutorials, tips and best practices.",
    name: "Help Center",
    screenshots: helpCenterScreenShot,
    slug: "help-center",
    stack: ["TS", "React", "Tailwind"],
    thumbnail: helpCenterThumbnail,
    website: "https://uplus.rw/help-center",
  },
  {
    category: "web",
    description:
      "A dashboard for Uplus clients to visualize their financial and social activities. They can see how much they donated, withdrew, or loaned, and the impact of their donations on the causes they care about. They can also discover insights, patterns, and opportunities to enhance their finances and social impact. This dashboard is useful because it gives them feedback and motivation to keep donating for a better cause. It is convenient when they want to check their balance, monitor their progress, or plan their next steps.",
    name: "Data visualization",
    screenshots: dashooardScreenShot,
    slug: "data-visualization",
    stack: ["TS", "React", "Tailwind"],
    thumbnail: clientPortalThumbnail,
    website: "https://portal.uplus.rw",
  },
];

export default projectSet;
