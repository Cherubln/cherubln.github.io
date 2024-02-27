import { IconType } from "react-icons";

export type ExperienceType = {
  role: string;
  company: string;
  duration: string;
  location: { name: string; Icon: IconType };
  website: { name: string; Icon: IconType };
  description: string;
  logo: string;
  skills: string[];
};
