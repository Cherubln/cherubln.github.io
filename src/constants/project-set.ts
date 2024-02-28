import { ProjectType } from "../types/ProjectType";
import floraFables from "../assets/flora-fables.png";
import dialogue from "../assets/dialog.png";
import uplus from "../assets/uplus-web.png";
import helpCenter from "../assets/helpcenter.png";
import clientPortal from "../assets/client-data.png";
import gameHub from "../assets/game-hub.png";

const projectSet: ProjectType[] = [
  {
    name: "Flora Fables",
    category: "web app",
    image: floraFables,
  },
  {
    name: "Help Center",
    category: "website",
    image: helpCenter,
  },
  {
    name: "Game Portal",
    category: "web app",
    image: gameHub,
  },
  {
    name: "Data visualization",
    category: "web app",
    image: clientPortal,
  },
  {
    name: "Uplus Website",
    category: "website",
    image: uplus,
  },
  {
    name: "Dialogue",
    category: "web app",
    image: dialogue,
  },
];

export default projectSet;
