import tailwindCSSLogo from "../../../assets/images/techIcons/tailwindCSSLogo.svg";
import piniaLogo from "../../../assets/images/techIcons/piniaLogo.svg";
import vueLogo from "../../../assets/images/techIcons/vueLogo.svg";
import reactLogo from "../../../assets/images/techIcons/reactLogo.svg";
import typeScriptLogo from "../../../assets/images/techIcons/typescriptLogo.svg";
import sassLogo from "../../../assets/images/techIcons/sassLogo.svg";
import figmaLogo from "../../../assets/images/techIcons/figmaLogo.svg";
import javascriptLogo from "../../../assets/images/techIcons/javascriptLogo.svg";
import cssLogo from "../../../assets/images/techIcons/cssLogo.svg";
import styledLogo from "../../../assets/images/techIcons/styledComponentsLogo.svg";
import htmlLogo from "../../../assets/images/techIcons/htmlLogo.svg";

import GodOfWar from "../../../assets/images/screenshots/GodOfWar.webp";
import Ebooks from "../../../assets/images/screenshots/Ebooks.webp";
import Todo from "../../../assets/images/screenshots/Todo.webp";
import Fylo from "../../../assets/images/screenshots/Fylo.webp";

export const arrayCards = [
  {
    img: Ebooks,
    alt: "Imagem do projeto E-books",
    title: "E-books",
    info: "Site de pesquisa de livros com uso de API da Google, criado para um processo seletivo na área.",
    technologies: [
      { img: vueLogo, alt: "Vue logo" },
      { img: piniaLogo, alt: "Pinia logo" },
      { img: tailwindCSSLogo, alt: "TailwindCSS Logo" },
      { img: htmlLogo, alt: "Html logo" },
      { img: figmaLogo, alt: "Figma logo" },
    ],
    liveLink: "https://e-books-web.vercel.app/#/",
    github: "https://github.com/HenriqueAMascarin/E-booksWeb",
  },
  {
    img: Fylo,
    alt: "Imagem do projeto Fylo landing page",
    title: "Fylo Landing Page",
    info: "Dado como desafio em sala de aula da Frontend Mentor, para terminar em pouco tempo e adicionado coisas além do que foi pedido.",
    technologies: [
      { img: reactLogo, alt: "React logo" },
      { img: typeScriptLogo, alt: "TypeScript logo" },
      { img: styledLogo, alt: "Styled-components logo" },
      { img: htmlLogo, alt: "Html logo" },
    ],
    liveLink: "https://fylo-website-ashen.vercel.app",
    github: "https://github.com/HenriqueAMascarin/FyloWebsite",
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
    github: "https://github.com/HenriqueAMascarin/God-Of-War",
  },
  {
    img: Todo,
    alt: "Imagem do projeto todo list",
    title: "Todo List",
    info: "Projeto de lista de tarefas com troca de tema feito como desafio da Frontend Mentor.",
    technologies: [
      { img: reactLogo, alt: "React logo" },
      { img: javascriptLogo, alt: "Javascript logo" },
      { img: cssLogo, alt: "Css logo" },
      { img: htmlLogo, alt: "Html logo" },
    ],
    liveLink: "https://todo-list-inky-beta.vercel.app",
    github: "https://github.com/HenriqueAMascarin/Todo-list",
  },
];
