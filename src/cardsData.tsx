import reactLogo from './assets/images/techIcons/react.svg';
import typeScript from './assets/images/techIcons/typescript.svg';
import sass from './assets/images/techIcons/sass.svg';
import figma from './assets/images/techIcons/figma.svg';
import photoshop from './assets/images/techIcons/photoshop.svg';
import javascript from './assets/images/techIcons/javascript.svg';
import css from './assets/images/techIcons/css.svg';
import styledLogo from './assets/images/techIcons/styled-components.svg';
import html from './assets/images/techIcons/html.svg';

import GodOfWar from './assets/images/screenshots/GodOfWar.webp';
import Todo from './assets/images/screenshots/Todo.webp';
import Shortly from './assets/images/screenshots/Shortly.webp';
import Fylo from './assets/images/screenshots/Fylo.webp';

export const arrayCards = [
    {
        img: Fylo,
        alt: "Imagem do projeto Fylo landing page",
        title: "Fylo Landing page",
        info: "Desafio de página de negócios da Frontend Mentor.",
        technologies: [{ img: reactLogo, alt: "React logo" },
        { img: typeScript, alt: "TypeScript logo" },
        { img: styledLogo, alt: "Styled-components logo" },
        { img: html, alt: "Html logo" },],
        liveLink: "https://fylo-website-ashen.vercel.app", github: "https://github.com/LuckTheGamers/FyloWebsite"
    },
    {
        img: GodOfWar,
        alt: "Imagem do projeto god of war e-commerce",
        title: "God of war e-commerce",
        info: "Projeto de e-commerce com a temática do jogo God of War: Ragnarök, com design único.",
        technologies: [{ img: reactLogo, alt: "React logo" },
        { img: typeScript, alt: "TypeScript logo" },
        { img: sass, alt: "Sass logo" },
        { img: html, alt: "Html logo" },
        { img: figma, alt: "Figma logo" }],
        liveLink: "https://godofwar-shop.vercel.app", github: "https://github.com/LuckTheGamers/God-Of-War"
    },
    {
        img: Todo,
        alt: "Imagem do projeto todo list",
        title: "Todo list",
        info: "Projeto de lista de tarefas com troca de tema e criado junto como Frontend Mentor.",
        technologies: [{ img: reactLogo, alt: "React logo" },
        { img: javascript, alt: "Javascript logo" },
        { img: css, alt: "Css logo" },
        { img: html, alt: "Html logo" }],
        liveLink: "https://todo-list-inky-beta.vercel.app", github: "https://github.com/LuckTheGamers/Todo-list"
    },
    {
        img: Shortly,
        alt: "Imagem do projeto API landing page",
        title: "API landing page",
        info: "Landing page que contém uso de API que encurta o link passado pelo usuário.",
        technologies: [{ img: javascript, alt: "Javascript logo" },
        { img: css, alt: "Css logo" },
        { img: html, alt: "Html logo" }],
        liveLink: "https://api-landing-page-blond.vercel.app", github: "https://github.com/LuckTheGamers/API-landing-page"
    },
]