import { TechSection } from "../../../styles/mainStyles/TechSection.styles";
import { HorizontalPadding, LinesFlex, VerticalPadding, MaxWidthCapsule } from "../../../styles/GlobalStyle";
import React from "react";
import { ExpoSvg, FigmaSvg, NativeSvg, PiniaSvg, QuasarSvg, ReactSvg, ReduxSvg, SassSvg, StyledComponentsSvg, TailwindSvg, TypeScriptSvg, VueSvg } from "./techsSvgs";

export const arrayTech:  React.FC[] = [
  TypeScriptSvg,
  ExpoSvg,
  NativeSvg,
  ReactSvg,
  QuasarSvg,
  VueSvg,
  ReduxSvg,
  PiniaSvg,
  FigmaSvg,
  TailwindSvg,
  StyledComponentsSvg,
  SassSvg,
];

export default function Tecnologies() {
  return (
    <TechSection id="tecnologias" className="principalSections">
      <VerticalPadding>
        <HorizontalPadding>
          <MaxWidthCapsule>
            <LinesFlex>
              <h2>Tecnologias</h2>

              <div className="techIcons">
                {arrayTech.map((Svg, keyItem) => {
                  return <Svg key={keyItem}/>;
                })}
              </div>
            </LinesFlex>
          </MaxWidthCapsule>
        </HorizontalPadding>
      </VerticalPadding>
    </TechSection>
  );
}
