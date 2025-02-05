import tailwindCSSLogo from "/images/techIcons/tailwindCSSLogo.svg";
import piniaLogo from "/images/techIcons/piniaLogo.svg";
import vueLogo from "/images/techIcons/vueLogo.svg";
import reduxLogo from "/images/techIcons/reduxLogo.svg";
import reactNativeLogo from "/images/techIcons/reactNativeLogo.svg";
import reactLogo from "/images/techIcons/reactLogo.svg";
import typeScriptLogo from "/images/techIcons/typescriptLogo.svg";
import sassLogo from "/images/techIcons/sassLogo.svg";
import styledComponentsLogo from "/images/techIcons/styledComponentsLogo.svg";
import figmaLogo from "/images/techIcons/figmaLogo.svg";
import expoLogo from "/images/techIcons/expoLogo.svg";
import quasarLogo from "/images/techIcons/quasarLogo.svg";
import htmlLogo from "/images/techIcons/htmlLogo.svg";
import nextLogo from "/images/techIcons/nextLogo.svg";

function createSvg(svg: string, title: string) {
    return (
        <div className="svgComponents">
            <img src={svg} width="120px" height="120px" alt={`${title} logo`} title={title} />
            <p>{title}</p>
        </div>
    )
}

export const TailwindSvg = () => createSvg(tailwindCSSLogo, 'Tailwind CSS');
export const PiniaSvg = () => createSvg(piniaLogo, 'Pinia');
export const VueSvg = () => createSvg(vueLogo, 'Vue');
export const ReduxSvg = () => createSvg(reduxLogo, 'Redux');
export const ReactNativeSvg = () => createSvg(reactNativeLogo, 'React Native');
export const ReactSvg = () => createSvg(reactLogo, 'React');
export const TypeScriptSvg = () => createSvg(typeScriptLogo, 'TypeScript');
export const SassSvg = () => createSvg(sassLogo, 'Sass');
export const StyledComponentsSvg = () => createSvg(styledComponentsLogo, 'Styled Components');
export const FigmaSvg = () => createSvg(figmaLogo, 'Figma');
export const ExpoSvg = () => createSvg(expoLogo, 'Expo');
export const QuasarSvg = () => createSvg(quasarLogo, 'Quasar');
export const HtmlSvg = () => createSvg(htmlLogo, 'HTML');
export const NextSvg = () => createSvg(nextLogo, 'Next.js');
