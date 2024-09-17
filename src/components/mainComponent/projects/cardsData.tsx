import GodOfWar from "/images/screenshots/GodOfWar.webp";
import Ebooks from "/images/screenshots/Ebooks.webp";
import MediaTimer from "/images/screenshots/MediaTimer.webp";
import { ExpoSvg, FigmaSvg, ReduxSvg, ReactNativeSvg, TypeScriptSvg, VueSvg, PiniaSvg, TailwindSvg, htmlSvg, ReactSvg, SassSvg } from "../techs/techsSvgs";

export const arrayCards = [
  {
    id: 'projetos/MediaTimer',
    img: MediaTimer,
    alt: "Imagem da logo Media Timer",
    title: "Media Timer",
    info: "Aplicativo de temporizador com possibilidade de ouvir sons de seu dispositivo e diversas funcionalidades, com objetivo de solucionar um problema pessoal.",
    technologies: [
      ExpoSvg,
      ReactNativeSvg,
      TypeScriptSvg,
      ReduxSvg,
      FigmaSvg
    ],
    googleLink: "https://play.google.com/store/apps/details?id=com.henriqueamascarin.mediatimer",
    figma: "https://www.figma.com/design/XTRDCbSVe8lHtwkXK1Z5T7/Media-Timer?t=2WIleknFjgiShuOE-1",
    github: "https://github.com/HenriqueAMascarin/MediaTimer",
    policy: '/politica-privacidade/media-timer'
  },
  {
    id: 'projetos/Ebooks',
    img: Ebooks,
    alt: "Imagem do projeto E-books",
    title: "E-books",
    info: "Site de pesquisa de livros com uso de API da Google, criado para um processo seletivo na área.",
    technologies: [
      VueSvg,
      PiniaSvg,
      TailwindSvg,
      htmlSvg,
      FigmaSvg
    ],
    liveLink: "https://e-books-web.vercel.app",
    figma: "https://www.figma.com/design/GrGuOJvXLsZbMAGJY7DkIS/e-books?t=2WIleknFjgiShuOE-1",
    github: "https://github.com/HenriqueAMascarin/E-booksWeb",
  },
  {
    id: 'projetos/GodOfWar',
    img: GodOfWar,
    alt: "Imagem do projeto god of war e-commerce",
    title: "God Of War E-commerce",
    info: "Projeto de e-commerce com a temática do jogo God of War: Ragnarök, com design único.",
    technologies: [
      ReactSvg,
      TypeScriptSvg,
      SassSvg,
      htmlSvg,
      FigmaSvg
    ],
    liveLink: "https://godofwar-shop.vercel.app",
    figma: "https://www.figma.com/design/fFnrpY4zrUWgRxo06TTjs1/god-of-war?t=2WIleknFjgiShuOE-1",
    github: "https://github.com/HenriqueAMascarin/God-Of-War",
  },
];
