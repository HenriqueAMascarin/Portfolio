import tailwindCSSLogo from "/images/techIcons/tailwindCSSLogo.svg";
import piniaLogo from "/images/techIcons/piniaLogo.svg";
import vueLogo from "/images/techIcons/vueLogo.svg";
import reactLogo from "/images/techIcons/reactLogo.svg";
import typeScriptLogo from "/images/techIcons/typescriptLogo.svg";
import sassLogo from "/images/techIcons/sassLogo.svg";
import figmaLogo from "/images/techIcons/figmaLogo.svg";
import styledLogo from "/images/techIcons/styledComponentsLogo.svg";
import htmlLogo from "/images/techIcons/htmlLogo.svg";
import reactNativeLogo from "/images/techIcons/reactNativeLogo.svg";
import reduxLogo from "/images/techIcons/reduxLogo.svg";
import expoLogo from "/images/techIcons/expoLogo.svg";

import GodOfWar from "/images/screenshots/GodOfWar.webp";
import Ebooks from "/images/screenshots/Ebooks.webp";
import Fylo from "/images/screenshots/Fylo.webp";
import MediaTimer from "/images/screenshots/MediaTimer.jpg";

export const arrayCards = [
  {
    id: 'projetos/MediaTimer',
    img: MediaTimer,
    alt: "Imagem da logo Media Timer",
    title: "Media Timer",
    info: "Aplicativo de timer com API de músicas e diversas funcionalidades, com objetivo de solucionar um problema pessoal.",
    technologies: [
      { img: expoLogo, alt: "Expo logo" },
      { img: reactNativeLogo, alt: "React Native logo" },
      { img: typeScriptLogo, alt: "TypeScript logo" },
      { img: reduxLogo, alt: "Redux logo" },
      { img: figmaLogo, alt: "Figma logo" },
    ],
    downloadApk: "/apks/MediaTimer.apk",
    figma: "https://www.figma.com/design/XTRDCbSVe8lHtwkXK1Z5T7/Media-Timer?t=2WIleknFjgiShuOE-1",
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
    liveLink: "https://e-books-web.vercel.app",
    figma: "https://www.figma.com/design/GrGuOJvXLsZbMAGJY7DkIS/e-books?t=2WIleknFjgiShuOE-1",
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
    figma: "https://www.figma.com/design/fFnrpY4zrUWgRxo06TTjs1/god-of-war?t=2WIleknFjgiShuOE-1",
    github: "https://github.com/HenriqueAMascarin/God-Of-War",
  },
];
