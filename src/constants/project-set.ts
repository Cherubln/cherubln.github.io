import { ProjectType } from "../types/ProjectType";
import floraFables from "../assets/flora-fables.png";
import dialogue from "../assets/dialog.png";
import uplus from "../assets/uplus-web.png";
import helpCenter from "../assets/helpcenter.png";
import clientPortal from "../assets/client-data.png";
import gameHub from "../assets/game-hub.png";
import selfCare from "../assets/self-care.png";

const projectSet: ProjectType[] = [
  {
    name: "Flora Fables",
    category: "web",
    image: floraFables,
    slug: "flora-fables",
  },
  {
    name: "Help Center",
    category: "web",
    image: helpCenter,
    slug: "help-center",
  },
  {
    name: "Self-Care",
    category: "mobile",
    image: selfCare,
    slug: "self-care",
  },
  {
    name: "Game Portal",
    category: "web",
    image: gameHub,
    slug: "game-portal",
  },
  {
    name: "Data visualization",
    category: "web",
    image: clientPortal,
    slug: "data-visualization",
  },
  {
    name: "Uplus Website",
    category: "web",
    image: uplus,
    slug: "uplus-website",
  },
  {
    name: "Dialogue",
    category: "web",
    image: dialogue,
    slug: "dialogue",
  },
];

export default projectSet;
