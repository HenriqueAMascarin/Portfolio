import reactCoodeshImg from "/images/achievements/reactCoodesh.jpg";
import frontEndImg from "/images/achievements/frontendSenac.jpg";
import techstarsImg from "/images/achievements/techstars.webp";
import logicSenacImg from "/images/achievements/logicSenac.jpg";
import webDesignImg from "/images/achievements/webDesignUdemy.jpg";
import logicUdemyImg from "/images/achievements/logicUdemy.jpg";

export const achievementsData = [
  {
    isOpen: false,
    img: {
      src: reactCoodeshImg,
      alt: "Imagem de certificado React.js da empresa Coodesh",
    },
    title: "Certificado React.js",
    about: [
      "Teste da empresa Coodesh, constituída por diversas perguntas sobre o uso da tecnologia. Assim, comprovando o conhecimento em React.js.",
    ],
    moreInfoLink:
      "https://coodesh.com/share/certificate/fa796da0-c726-11ed-9234-cbd25d023b86",
  },
  {
    isOpen: false,
    img: {
      src: frontEndImg,
      alt: "Imagem de certificado do curso front-end trilha RSTI do Senac",
    },
    title: "Curso Front-end RSTI",
    about: [
      "Curso presencial da empresa Senac que ajudou a aperfeiçoar os conceitos de design, semântica de HTML e estilização CSS.",
    ],
    moreInfoLink: "https://www.senacrs.com.br/hotsite/programarsti/index.php",
  },
  {
    isOpen: false,
    img: {
      src: techstarsImg,
      alt: "Imagem com o troféu de primeiro lugar do Smart Cities",
    },
    title: "Startup Weekend Smart Cities - Santo Ângelo/RS (2022)",
    about: [
      "Evento cujo objetivo era criar um projeto, validar e vender para a mesa de jurados. Acabei atuando no design do aplicativo “O Campo”, que no fim fomos vencedores dessa edição.",
    ],
    moreInfoLink:
      "https://www.figma.com/design/YQg40R1PQaU2QsBeTgxcVn/Untitled?node-id=0-1&t=4ZzmcLsdVcHrbF2f-1",
  },
  {
    isOpen: false,
    img: {
      src: logicSenacImg,
      alt: "Imagem de certificado do curso lógica de programação trilha RSTI do Senac",
    },
    title: "Curso Lógica de Programação RSTI",
    about: [
      "Durante o curso presencial realizado na empresa Senac, tive a oportunidade de enfrentar desafios no papel e computador. Que, no fim, aperfeiçoaram minha lógica com a programação.",
    ],
    moreInfoLink: "https://www.senacrs.com.br/hotsite/programarsti/index.php",
  },
  {
    isOpen: false,
    img: {
      src: webDesignImg,
      alt: "Imagem de certificado do curso web design da Udemy",
    },
    title: "Curso Web Design Udemy",
    about: [
      "Curso da Udemy que proporcionou meu primeiro contato com o desenvolvimento de sites. No final, aprendi sobre as tecnologias HTML, CSS e JavaScript. Além de um toque especial de semântica, acessibilidade e lógica de programação.",
    ],
    moreInfoLink:
      "https://www.udemy.com/certificate/UC-16be765b-025e-479c-92e5-1449d7629545/",
  },
  {
    isOpen: false,
    img: {
      src: logicUdemyImg,
      alt: "Imagem de certificado do curso algoritmos e lógica de programação da Udemy",
    },
    title: "Curso Algoritmos e Lógica de Programação Udemy",
    about: [
      "Nesse curso da Udemy, foram apresentados diversos exercícios e explicações sobre lógica de programação. Que foram fundamentais para que eu pudesse dar o primeiro passo na área e compreender melhor.",
    ],
    moreInfoLink:
      "https://www.udemy.com/certificate/UC-24e04025-8e35-4d88-8fa1-bcc0194dbe05/",
  },
];
