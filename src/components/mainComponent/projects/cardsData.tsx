import tailwindCSSLogo from "/src/assets/images/techIcons/tailwindCSSLogo.svg";
import piniaLogo from "/src/assets/images/techIcons/piniaLogo.svg";
import vueLogo from "/src/assets/images/techIcons/vueLogo.svg";
import reactLogo from "/src/assets/images/techIcons/reactLogo.svg";
import typeScriptLogo from "/src/assets/images/techIcons/typescriptLogo.svg";
import sassLogo from "/src/assets/images/techIcons/sassLogo.svg";
import figmaLogo from "/src/assets/images/techIcons/figmaLogo.svg";
import styledLogo from "/src/assets/images/techIcons/styledComponentsLogo.svg";
import htmlLogo from "/src/assets/images/techIcons/htmlLogo.svg";
import reactNativeLogo from "/src/assets/images/techIcons/reactNativeLogo.svg";
import reduxLogo from "/src/assets/images/techIcons/reduxLogo.svg";
import expoLogo from "/src/assets/images/techIcons/expoLogo.svg";

import GodOfWar from "/src/assets/images/screenshots/GodOfWar.webp";
import Ebooks from "/src/assets/images/screenshots/Ebooks.webp";
import Fylo from "/src/assets/images/screenshots/Fylo.webp";
import MediaTimer from "/src/assets/images/screenshots/MediaTimer.jpg";

export const arrayCards = [
  {
    id: 'projetos/MediaTimer',
    img: MediaTimer,
    alt: "Imagem da logo Media Timer",
    title: "Media Timer",
    info: "Aplicativo de timer com API de músicas e diversas funcionalidades, com objetivo de solucionar um problema pessoal!",
    technologies: [
      { img: expoLogo, alt: "Expo logo" },
      { img: reactNativeLogo, alt: "React Native logo" },
      { img: typeScriptLogo, alt: "TypeScript logo" },
      { img: reduxLogo, alt: "Redux logo" },
      { img: figmaLogo, alt: "Figma logo" },
    ],
    downloadApk: "https://henriqueamascarin.vercel.app/src/assets/apks/MediaTimer.apk",
    github: "https://github.com/HenriqueAMascarin/MediaTimer",
  },
  {
    id: 'projetos/Ebooks',
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
    id: 'projetos/Fylo',
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
    id: 'projetos/GodOfWar',
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
];
