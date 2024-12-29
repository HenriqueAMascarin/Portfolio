import { HorizontalPadding, MaxWidthCapsule, VerticalPadding } from "../../styles/GlobalStyle";
import { MainThanks } from "../../styles/thanksStyles/MainThanks";
import translateI18n from "../../utils/translateI18n";

export default function ThanksMain() {
  return (
    <MainThanks>
      <section>
        <VerticalPadding>
          <HorizontalPadding>
            <MaxWidthCapsule>
              <div className="contentsMain">
                <h1>{translateI18n("thanksPage.title")}</h1>
                <p>{translateI18n("thanksPage.replyText")}</p>
                <p>{translateI18n("thanksPage.caseOfRedirect")} <a href="https://www.linkedin.com/in/henriqueamasc/" target="_blank">{translateI18n("thanksPage.clickHere")}</a></p>
                <a href="/" className="goBack">{translateI18n("general.goBack")}</a>
              </div>
            </MaxWidthCapsule>
          </HorizontalPadding>
        </VerticalPadding>
      </section>
    </MainThanks>
  );
}
