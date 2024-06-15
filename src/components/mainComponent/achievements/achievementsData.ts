import reactCoodeshImg from "/src/assets/images/achievements/reactCoodesh.jpg";
import frontEndImg from "/src/assets/images/achievements/frontEndSenac.jpg";
import techstarsImg from "/src/assets/images/achievements/techstars.webp";
import logicSenacImg from "/src/assets/images/achievements/logicSenac.jpg";
import webDesignImg from "/src/assets/images/achievements/webDesignUdemy.jpg";
import logicUdemyImg from "/src/assets/images/achievements/logicUdemy.jpg";

export const achievementsData = [
  {
    isOpen: false,
    img: {
      src: reactCoodeshImg,
      alt: "Imagem de certificado reactJS da empresa Coodesh",
    },
    title: "Certificado React.JS",
    about: [
      "Teste da empresa Coodesh, constituída por diversas perguntas sobre o uso da tecnologia. Assim, comprovando o conhecimento em React JS.",
    ],
  },
  {
    isOpen: false,
    img: {
      src: frontEndImg,
      alt: "Imagem de certificado do curso front-end trilha RSTI do Senac",
    },
    title: "Curso front-end RSTI",
    about: [
      "Curso presencial da empresa Senac que ajudou a aperfeiçoar os conceitos de design, semântica de HTML e estilização CSS.",
    ],
  },
  {
    isOpen: false,
    img: {
      src: techstarsImg,
      alt: "Imagem com o troféu de primeiro lugar do Smart Cities",
    },
    title: "Startup Weekend Smart Cities - Santo Ângelo/RS, novembro de 2022",
    about: [
      "Evento cujo objetivo era criar um projeto, validar ele e vender para a mesa de jurados.",
      "Acabei atuando no design do aplicativo “O Campo”, que no fim fomos vencedores dessa edição e como resultado aprendi muito com minha equipe nessa experiência.",
    ],
  },
  {
    isOpen: false,
    img: {
      src: logicSenacImg,
      alt: "Imagem de certificado do curso lógica de programação trilha RSTI do Senac",
    },
    title: "Curso lógica de programação RSTI",
    about: [
      "Durante o curso presencial realizado na empresa Senac, tive a oportunidade de enfrentar desafios no papel e computador. Que, no fim, aperfeiçoaram minha lógica com a programação.",
    ],
  },
  {
    isOpen: false,
    img: {
      src: webDesignImg,
      alt: "Imagem de certificado do curso web design da Udemy",
    },
    title: "Curso web design",
    about: [
      "Curso da Udemy que proporcionou meu primeiro contato com o desenvolvimento de sites. No final, aprendi sobre as tecnologias HTML, CSS e JavaScript. Além de um toque especial de semântica, acessibilidade e lógica de programação.",
    ],
  },
  {
    isOpen: false,
    img: {
      src: logicUdemyImg,
      alt: "Imagem de certificado do curso algoritmos e lógica de programação da Udemy",
    },
    title: "Curso algoritmos e lógica de programação",
    about: [
      "Nesse curso da Udemy, foram apresentados diversos exercícios e explicações sobre lógica de programação. Que foram fundamentais para que eu pudesse dar o primeiro passo na área e compreender melhor.",
    ],
  },
];
