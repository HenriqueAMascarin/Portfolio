import { arrayTech } from "./techsData";
import { TechSection } from "../../../styles/mainStyles/TechSection.styles";
import { HorizontalPadding, LinesFlex, VerticalPadding, MaxWidthCapsule } from "../../../styles/GlobalStyle";

export default function Tecnologies() {
  return (
    <TechSection id="tecnologias" className="principalSections">
      <VerticalPadding>
        <HorizontalPadding>
          <MaxWidthCapsule>
            <LinesFlex>
              <h2>Tecnologias</h2>

              <div className="techIcons">
                {arrayTech.map((el, key) => {
                  return <img src={el.img} width="120px" height="120px" alt={el.alt} title={el.alt} key={key} />;
                })}
              </div>
            </LinesFlex>
          </MaxWidthCapsule>
        </HorizontalPadding>
      </VerticalPadding>
    </TechSection>
  );
}
