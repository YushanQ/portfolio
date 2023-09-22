import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";

export const navLinks = [
    {
      id: 1,
      text: "Home",
      href: "home",
    },
    {
      id: 2,
      text: "About",
      href: "about",
    },
    {
      id: 3,
      text: "Projects",
      href: "projects",
    },
];

export const projs = [
  {
    id: 1,
    title: "BadgerChat Web & Mobile Development",
    desc: "-A chatroom application supporting web and app access.",
    skills: "React, React Native, API",
    img: p1,
  },
  {
    id: 2,
    title: "Gratuation Ceremony Comment Board",
    desc: "-Any message to leave before gratuation? ",
    skills: "Node.js, MySQL",
    link: "https://github.com/YushanQ/UIBEtextBoard.github.io",
    img: p2,
  }
];