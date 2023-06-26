import tailwindLogo from "../../assets/images/techIcons/tailwindLogo.svg";
import piniaLogo from "../../assets/images/techIcons/piniaLogo.svg";
import vueLogo from "../../assets/images/techIcons/vueLogo.svg";
import reduxLogo from "../../assets/images/techIcons/reduxLogo.svg";
import nativeLogo from "../../assets/images/techIcons/reactNativeLogo.svg";
import reactLogo from "../../assets/images/techIcons/reactLogo.svg";
import typeScriptLogo from "../../assets/images/techIcons/typescriptLogo.svg";
import sassLogo from "../../assets/images/techIcons/sassLogo.svg";
import styledComponentsLogo from "../../assets/images/techIcons/styledComponentsLogo.svg";
import figmaLogo from "../../assets/images/techIcons/figmaLogo.svg";
import photoshopLogo from "../../assets/images/techIcons/photoshopLogo.svg";

import { TechSection } from "../../styles/mainStyles/TechSection.styles";
import {
  HorizontalPadding,
  LinesFlex,
  VerticalPadding,
} from "../../styles/GlobalStyle";

export default function Tecnologies() {
  const arrayTech: { img: string; alt: string }[] = [
    { img: tailwindLogo, alt: "Tailwind logo" },
    { img: piniaLogo, alt: "Pinia logo" },
    { img: vueLogo, alt: "Vue logo" },
    { img: reduxLogo, alt: "Redux logo" },
    { img: nativeLogo, alt: "React native logo" },
    { img: reactLogo, alt: "React logo" },
    { img: typeScriptLogo, alt: "TypeScript logo" },
    { img: sassLogo, alt: "Sass logo" },
    { img: styledComponentsLogo, alt: "StyledComponents logo" },
    { img: figmaLogo, alt: "Figma logo" },
    { img: photoshopLogo, alt: "Photoshop logo" },
  ];

  return (
    <TechSection id="technologies">
      <VerticalPadding>
        <HorizontalPadding>
          <LinesFlex>
            <h2>Tecnologias</h2>
            
            <div className="techIcons">
              {arrayTech.map((el, key) => {
                return (
                  <img
                    src={el.img}
                    width="120px"
                    height="120px"
                    alt={el.alt}
                    title={el.alt}
                    key={key}
                  />
                );
              })}
            </div>
          </LinesFlex>
        </HorizontalPadding>
      </VerticalPadding>
    </TechSection>
  );
}
