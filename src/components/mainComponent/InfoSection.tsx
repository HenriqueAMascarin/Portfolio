import photo from "/images/photo.webp";
import { HorizontalPadding, MaxWidthCapsule, VerticalPadding } from "../../styles/GlobalStyle";
import { Info } from "../../styles/mainStyles/Info.styles";
import curriculum from "/images/curriculumHenrique.pdf";

export default function InfoSection() {
  return (
    <Info id="sobre">
      <VerticalPadding>
        <HorizontalPadding>
          <MaxWidthCapsule>
            <div className="infoDiv">
              <img width="538" height="510" src={photo} alt="Foto do Henrique" />

              <div>
                <h2>Sobre</h2>

                <div className="textInfo">
                  <p>
                    Sou uma pessoa determinada, que tenho como objetivo melhorar constantemente. Não gosto de brigas e tento sempre ser amigável. Procuro, assim, aprender com os outros e auxiliar o possível.
                  </p>
                  <p>
                    Sempre gostei de jogos eletrônicos e acabei desenvolvendo projetos utilizando a Unity por um tempo, infelizmente acabei parando. Mas no fim, trouxe muitos conhecimentos em relação a design, lógica de programação e criatividade.
                  </p>
                  <p>
                    Contudo, acabei voltando para a programação como desenvolvedor front-end. A fim de aprender sobre a área e me aprofundar ainda mais, para assim criar as melhores soluções com design agradável pensando na experiência do usuário.
                  </p>
                  <p>
                    Por fim, estou concentrando meus estudos na área de desenvolvimento mobile com React Native, visando aprimorar minhas habilidades e buscar minha próxima experiência profissional nessa tecnologia.
                  </p>
                </div>

                <div className="infoAction">
                  <div className="infoIcons">
                    <a href="https://www.linkedin.com/in/henriqueamasc/" target="_blank">
                      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Linkedin icon</title>
                        <path
                          d="M46.4286 0H3.56027C1.59598 0 0 1.6183 0 3.60491V46.3951C0 48.3817 1.59598 50 3.56027 50H46.4286C48.3929 50 50 48.3817 50 46.3951V3.60491C50 1.6183 48.3929 0 46.4286 0ZM15.1116 42.8571H7.70089V18.9955H15.1228V42.8571H15.1116ZM11.4062 15.7366C9.02902 15.7366 7.10938 13.8058 7.10938 11.4397C7.10938 9.07366 9.02902 7.14286 11.4062 7.14286C13.7723 7.14286 15.7031 9.07366 15.7031 11.4397C15.7031 13.817 13.7835 15.7366 11.4062 15.7366ZM42.8906 42.8571H35.4799V31.25C35.4799 28.4821 35.4241 24.9219 31.6295 24.9219C27.7679 24.9219 27.1763 27.9353 27.1763 31.0491V42.8571H19.7656V18.9955H26.875V22.2545H26.9754C27.9688 20.3795 30.3906 18.404 33.9955 18.404C41.4955 18.404 42.8906 23.3482 42.8906 29.7768V42.8571Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    </a>

                    <a href="https://github.com/HenriqueAMascarin" target="_blank">
                      <svg viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Github icon</title>
                        <path
                          d="M17.1523 40.2599C17.1523 40.4667 16.9145 40.6321 16.6147 40.6321C16.2735 40.6631 16.0357 40.4977 16.0357 40.2599C16.0357 40.0531 16.2735 39.8877 16.5734 39.8877C16.8835 39.8567 17.1523 40.0221 17.1523 40.2599ZM13.9369 39.7947C13.8646 40.0014 14.0713 40.2392 14.3815 40.3013C14.6503 40.4047 14.9605 40.3013 15.0225 40.0945C15.0845 39.8877 14.8881 39.6499 14.5779 39.5569C14.3091 39.4845 14.0093 39.5879 13.9369 39.7947ZM18.5067 39.6189C18.2069 39.6913 18.0001 39.8877 18.0312 40.1255C18.0622 40.3323 18.331 40.4667 18.6412 40.3943C18.941 40.322 19.1478 40.1255 19.1167 39.9187C19.0857 39.7223 18.8066 39.5879 18.5067 39.6189ZM25.3098 0C10.9696 0 0 10.8869 0 25.2271C0 36.693 7.2166 46.5047 17.5245 49.9579C18.8479 50.1957 19.3132 49.3789 19.3132 48.7069C19.3132 48.0658 19.2822 44.5299 19.2822 42.3587C19.2822 42.3587 12.0449 43.9096 10.5251 39.2777C10.5251 39.2777 9.34642 36.2691 7.65083 35.4937C7.65083 35.4937 5.28321 33.8704 7.81626 33.9015C7.81626 33.9015 10.3907 34.1082 11.8071 36.5689C14.0713 40.5598 17.8657 39.4121 19.3442 38.7298C19.582 37.0755 20.254 35.9279 20.9984 35.2455C15.219 34.6045 9.38778 33.7671 9.38778 23.821C9.38778 20.9778 10.1735 19.551 11.8278 17.7313C11.559 17.0593 10.6802 14.2884 12.0966 10.7112C14.2574 10.0391 19.2305 13.5027 19.2305 13.5027C21.2983 12.9237 23.5211 12.6239 25.7233 12.6239C27.9255 12.6239 30.1484 12.9237 32.2162 13.5027C32.2162 13.5027 37.1893 10.0288 39.3501 10.7112C40.7665 14.2988 39.8877 17.0593 39.6189 17.7313C41.2731 19.5613 42.2864 20.9881 42.2864 23.821C42.2864 33.7981 36.1967 34.5942 30.4172 35.2455C31.3684 36.0623 32.1749 37.6131 32.1749 40.0428C32.1749 43.527 32.1438 47.8384 32.1438 48.6862C32.1438 49.3582 32.6194 50.175 33.9325 49.9372C44.2714 46.5047 51.2813 36.693 51.2813 25.2271C51.2813 10.8869 39.6499 0 25.3098 0ZM10.0495 35.6591C9.91507 35.7625 9.94608 36.0003 10.1218 36.1967C10.2873 36.3621 10.5251 36.4345 10.6595 36.3001C10.7939 36.1967 10.7629 35.9589 10.5871 35.7625C10.4217 35.597 10.1839 35.5247 10.0495 35.6591ZM8.93287 34.8216C8.86049 34.956 8.96388 35.1215 9.17066 35.2248C9.33608 35.3282 9.54286 35.2972 9.61524 35.1525C9.68761 35.0181 9.58422 34.8526 9.37744 34.7493C9.17066 34.6872 9.00524 34.7182 8.93287 34.8216ZM12.2827 38.5023C12.1173 38.6367 12.1793 38.9469 12.4171 39.1433C12.6549 39.3811 12.9547 39.4121 13.0891 39.2467C13.2235 39.1123 13.1615 38.8021 12.9547 38.6057C12.7273 38.3679 12.4171 38.3369 12.2827 38.5023ZM11.104 36.9825C10.9386 37.0859 10.9386 37.3547 11.104 37.5925C11.2695 37.8303 11.5486 37.9337 11.683 37.8303C11.8485 37.6959 11.8485 37.427 11.683 37.1893C11.5383 36.9515 11.2695 36.8481 11.104 36.9825Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    </a>
                  </div>
                  <a href={curriculum} download={"CurrículoHenrique"} className="infoResume">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.57271 16.3857C4.57271 16.9056 4.99409 17.3269 5.51389 17.3269H12.4817C13.0015 17.3269 13.4229 16.9056 13.4229 16.3857V16.3857C13.4229 15.8659 13.0015 15.4446 12.4817 15.4446H5.51389C4.99409 15.4446 4.57271 15.8659 4.57271 16.3857V16.3857ZM4.57271 11.8787C4.57271 12.3985 4.99409 12.8199 5.51389 12.8199H12.4817C13.0015 12.8199 13.4229 12.3985 13.4229 11.8787V11.8787C13.4229 11.3589 13.0015 10.9375 12.4817 10.9375H5.51389C4.99409 10.9375 4.57271 11.3589 4.57271 11.8787V11.8787ZM2.08654 22C1.51735 22 1.0273 21.7983 0.616378 21.3948C0.205459 20.9913 0 20.5102 0 19.9513V2.053C0 1.49306 0.205459 1.01091 0.616378 0.606544C1.0273 0.202181 1.51735 0 2.08654 0H11.2569C11.5189 0 11.7705 0.102859 11.9575 0.286448L17.7006 5.92534C17.8921 6.11338 18 6.3705 18 6.6389V19.9513C18 20.5102 17.7941 20.9913 17.3822 21.3948C16.9704 21.7983 16.4793 22 15.9091 22H2.08654ZM11.6029 7.20876C11.0506 7.20876 10.6029 6.76104 10.6029 6.20876V2.053H2.08654V19.9513H15.9091V7.20876H11.6029Z" fill="#212121" />
                    </svg>
                    Resumo
                  </a>
                </div>
              </div>
            </div>
          </MaxWidthCapsule>
        </HorizontalPadding>
      </VerticalPadding>
    </Info>
  );
}
