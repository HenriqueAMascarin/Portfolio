import tailwindCSSLogo from "/images/techIcons/tailwindCSSLogo.svg";
import piniaLogo from "/images/techIcons/piniaLogo.svg";
import quasarLogo from "/images/techIcons/quasarLogo.svg";
import vueLogo from "/images/techIcons/vueLogo.svg";
import sgbrImg from "/images/considerations/sgbr.jpg";

export const experiencesArray = [
  {
    position: "Front-end Júnior",
    company: { name: "SGBr Sistemas", url: "https://sgbr.com.br/" },
    timeCompany: "Julho 2023 - presente",
    about:
      "Desenvolvimento de sites focados em soluções de gerenciamento empresarial. Minhas principais tarefas incluem o desenvolvimento, manutenção de sistemas e landing pages.",
    technologies: [
      { img: quasarLogo, alt: "Quasar Logo" },
      { img: vueLogo, alt: "Vue logo" },
      { img: piniaLogo, alt: "Pinia logo" },
      { img: tailwindCSSLogo, alt: "TailwindCSS Logo" },
    ],
    consideration: {src: sgbrImg, alt: 'Imagem do personagem Link do jogo The Legend of Zelda, junto a seu escudo com logo da SGBr'},
  },
];
