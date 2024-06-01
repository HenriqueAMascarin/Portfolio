import { HorizontalPadding, MaxWidthCapsule, VerticalPadding } from "../../styles/GlobalStyle";
import { ContactStyle } from "../../styles/mainStyles/ContactStyle.style";
import photo from "../../assets/images/photo.webp";

export default function ContactSection() {
  return (
    <ContactStyle id="contato">
      <VerticalPadding>
        <HorizontalPadding>
          <MaxWidthCapsule>

            <div className="containerContact">
              <h2>Contato</h2>

              <img width="538" height="510" src={photo} alt="Foto do Henrique" />

              <div className="contactInfo">
                <p><span className="redText">Obrigado</span> por <span className="redText">visitar</span> meu <span className="redText">portfólio!</span></p>
                <p>
                  Caso tenha <span className="redText">interesse</span> no meu <span className="redText">trabalho</span> ou se gostaria de manter <span className="redText">contato</span>.
                </p>
                <p>Se sinta à vontade para se <span className="blueText">conectar</span> e enviar uma <span className="blueText">mensagem</span> pelo <span className="blueText">LinkedIn!</span></p>
                <a href="https://www.linkedin.com/in/henriqueamasc/" target="_blank" rel="noopener noreferrer" className="btnLinkedin">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Linkedin logo</title>
                    <path
                      d="M46.4286 0H3.56027C1.59598 0 0 1.6183 0 3.60491V46.3951C0 48.3817 1.59598 50 3.56027 50H46.4286C48.3929 50 50 48.3817 50 46.3951V3.60491C50 1.6183 48.3929 0 46.4286 0ZM15.1116 42.8571H7.70089V18.9955H15.1228V42.8571H15.1116ZM11.4062 15.7366C9.02902 15.7366 7.10938 13.8058 7.10938 11.4397C7.10938 9.07366 9.02902 7.14286 11.4062 7.14286C13.7723 7.14286 15.7031 9.07366 15.7031 11.4397C15.7031 13.817 13.7835 15.7366 11.4062 15.7366ZM42.8906 42.8571H35.4799V31.25C35.4799 28.4821 35.4241 24.9219 31.6295 24.9219C27.7679 24.9219 27.1763 27.9353 27.1763 31.0491V42.8571H19.7656V18.9955H26.875V22.2545H26.9754C27.9688 20.3795 30.3906 18.404 33.9955 18.404C41.4955 18.404 42.8906 23.3482 42.8906 29.7768V42.8571Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                  Clique aqui!</a>
              </div>
            </div>

          </MaxWidthCapsule>
        </HorizontalPadding>
      </VerticalPadding>
    </ContactStyle>
  );
}
