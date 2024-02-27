import { CiDesktop } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SkillType } from "../types/SkillType";

const skillSet: SkillType[] = [
  {
    Icon: FaCode,
    heading: "Software Development",
    content:
      "Skilled in both dynamic and static programming: Python, JavaScript, TypeScript.",
  },
  {
    Icon: CiDesktop,
    heading: "Front-end Development",
    content:
      "Over 3 years of development experience in building web apps with HTML, CSS, JS, React and NextJS.",
  },
  {
    Icon: TbBrandReactNative,
    heading: "Mobile App Development",
    content:
      "Familiarity with react-native framework for developing mobile app solutions.",
  },
];

export default skillSet;
