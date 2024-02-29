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
  },
  {
    name: "Help Center",
    category: "web",
    image: helpCenter,
  },
  {
    name: "Self-Care",
    category: "mobile",
    image: selfCare,
  },
  {
    name: "Game Portal",
    category: "web",
    image: gameHub,
  },
  {
    name: "Data visualization",
    category: "web",
    image: clientPortal,
  },
  {
    name: "Uplus Website",
    category: "web",
    image: uplus,
  },
  {
    name: "Dialogue",
    category: "web",
    image: dialogue,
  },
];

export default projectSet;
