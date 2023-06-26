import tailwindLogo from "./assets/images/techIcons/tailwindLogo.svg";
import piniaLogo from "./assets/images/techIcons/piniaLogo.svg";
import vueLogo from "./assets/images/techIcons/vueLogo.svg";
import reactLogo from "./assets/images/techIcons/reactLogo.svg";
import typeScriptLogo from "./assets/images/techIcons/typescriptLogo.svg";
import sassLogo from "./assets/images/techIcons/sassLogo.svg";
import figmaLogo from "./assets/images/techIcons/figmaLogo.svg";
import javascriptLogo from "./assets/images/techIcons/javascriptLogo.svg";
import cssLogo from "./assets/images/techIcons/cssLogo.svg";
import styledLogo from "./assets/images/techIcons/styledComponentsLogo.svg";
import htmlLogo from "./assets/images/techIcons/htmlLogo.svg";

import GodOfWar from "./assets/images/screenshots/GodOfWar.webp";
import Ebooks from "./assets/images/screenshots/Ebooks.webp";
import Todo from "./assets/images/screenshots/Todo.webp";
import Fylo from "./assets/images/screenshots/Fylo.webp";

export const arrayCards = [
  {
    img: Ebooks,
    alt: "Imagem do projeto E-books",
    title: "E-books",
    info: "Site de pesquisa de livros com uso de API da Google.",
    technologies: [
      { img: vueLogo, alt: "Vue logo" },
      { img: piniaLogo, alt: "Pinia logo" },
      { img: tailwindLogo, alt: "Tailwind Logo" },
      { img: htmlLogo, alt: "Html logo" },
    ],
    liveLink: "https://e-books-web.vercel.app/#/",
    github: "https://github.com/LuckTheGamers/E-booksWeb",
  },
  {
    img: Fylo,
    alt: "Imagem do projeto Fylo landing page",
    title: "Fylo Landing Page",
    info: "Desafio de página de negócios da Frontend Mentor.",
    technologies: [
      { img: reactLogo, alt: "React logo" },
      { img: typeScriptLogo, alt: "TypeScript logo" },
      { img: styledLogo, alt: "Styled-components logo" },
      { img: htmlLogo, alt: "Html logo" },
    ],
    liveLink: "https://fylo-website-ashen.vercel.app",
    github: "https://github.com/LuckTheGamers/FyloWebsite",
  },
  {
    img: GodOfWar,
    alt: "Imagem do projeto god of war e-commerce",
    title: "God Of War E-commerce",
    info: "Projeto de e-commerce com a temática do jogo God of War: Ragnarök, com design único.",
    technologies: [
      { img: reactLogo, alt: "React logo" },
      { img: typeScriptLogo, alt: "TypeScript logo" },
      { img: sassLogo, alt: "Sass logo" },
      { img: htmlLogo, alt: "Html logo" },
      { img: figmaLogo, alt: "Figma logo" },
    ],
    liveLink: "https://godofwar-shop.vercel.app",
    github: "https://github.com/LuckTheGamers/God-Of-War",
  },
  {
    img: Todo,
    alt: "Imagem do projeto todo list",
    title: "Todo List",
    info: "Projeto de lista de tarefas com troca de tema e criado junto como Frontend Mentor.",
    technologies: [
      { img: reactLogo, alt: "React logo" },
      { img: javascriptLogo, alt: "Javascript logo" },
      { img: cssLogo, alt: "Css logo" },
      { img: htmlLogo, alt: "Html logo" },
    ],
    liveLink: "https://todo-list-inky-beta.vercel.app",
    github: "https://github.com/LuckTheGamers/Todo-list",
  },
];
