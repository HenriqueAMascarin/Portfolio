import SGBrImg from "/images/logoExperiencies/SGBr.webp";
import HenriqueMascarinImg from "/images/logoExperiencies/HenriqueMascarin.webp";
import { ExpoSvg, FigmaSvg, PiniaSvg, QuasarSvg, ReactNativeSvg, TailwindSvg, TypeScriptSvg, VueSvg } from "../techs/techsSvgs";

export const experiencesArray = [
  {
    position: "Fundador e Desenvolvedor Mobile",
    company: { name: "Henrique Mascarin", url: "https://play.google.com/store/apps/dev?id=8770400649408057901" },
    timeCompany: "Agosto 2024 - presente",
    about:
      "Própria empresa na Google Play aonde possuo aplicativos para o cotidiano das pessoas. Atualmente desenvolvendo e dando manutenção no aplicativo Media Timer.",
    technologies: [
      ReactNativeSvg,
      ExpoSvg,
      TypeScriptSvg,
      FigmaSvg,
    ],
    logo: HenriqueMascarinImg,
  },
  {
    position: "Desenvolvedor Front-end",
    company: { name: "SGBr® Sistemas", url: "https://sgbr.com.br/" },
    timeCompany: "Julho 2023 - presente",
    about:
      "Desenvolvimento de sites focados em soluções de gerenciamento empresarial. Minhas principais tarefas incluem o desenvolvimento, manutenção de sistemas e landing pages.",
    technologies: [
      QuasarSvg,
      VueSvg,
      PiniaSvg,
      TailwindSvg,
    ],
    logo: SGBrImg,
  },
];
