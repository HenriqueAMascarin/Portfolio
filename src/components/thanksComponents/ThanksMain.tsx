import { HorizontalPadding, MaxWidthCapsule, VerticalPadding } from "../../styles/GlobalStyle";
import { MainThanks } from "../../styles/thanksStyles/MainThanks";

export default function ThanksMain() {
  return (
    <MainThanks>
      <section>
        <VerticalPadding>
          <HorizontalPadding>
            <MaxWidthCapsule>
              <div className="contentsMain">
                <h1>Muito obrigado!</h1>
                <p>Lhe responderei quanto antes.</p>
                <p>Caso não seja redirecionado <a href="https://www.linkedin.com/in/henriqueamasc/" target="_blank">clique aqui!</a></p>
                <a href="/" className="goBack">Voltar</a>
              </div>
            </MaxWidthCapsule>
          </HorizontalPadding>
        </VerticalPadding>
      </section>
    </MainThanks>
  );
}
