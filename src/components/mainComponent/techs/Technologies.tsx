import { TechSection } from "../../../styles/mainStyles/TechSection.styles";
import { HorizontalPadding, LinesFlex, VerticalPadding, MaxWidthCapsule } from "../../../styles/GlobalStyle";
import React from "react";
import { ExpoSvg, FigmaSvg, ReactNativeSvg, PiniaSvg, QuasarSvg, ReactSvg, ReduxSvg, SassSvg, StyledComponentsSvg, TailwindSvg, TypeScriptSvg, VueSvg, NextSvg } from "./techsSvgs";
import translateI18n from "../../../utils/translateI18n";

export const arrayTech: React.FC[] = [
  ReactNativeSvg,
  ExpoSvg,
  NextSvg,
  ReactSvg,
  TypeScriptSvg,
  QuasarSvg,
  VueSvg,
  ReduxSvg,
  PiniaSvg,
  FigmaSvg,
  TailwindSvg,
  StyledComponentsSvg,
  SassSvg,
];

export default function Technologies() {
  return (
    <TechSection id="technologies" className="principalSections">
      <VerticalPadding>
        <HorizontalPadding>
          <MaxWidthCapsule>
            <LinesFlex>
              <h2>{translateI18n("mainPage.technologiesSection.title")}</h2>

              <div className="techIcons">
                {arrayTech.map((Svg, keyItem) => {
                  return <Svg key={keyItem} />;
                })}
              </div>
            </LinesFlex>
          </MaxWidthCapsule>
        </HorizontalPadding>
      </VerticalPadding>
    </TechSection>
  );
}
