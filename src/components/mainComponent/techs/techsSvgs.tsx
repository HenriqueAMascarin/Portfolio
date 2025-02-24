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
import jestLogo from "/images/techIcons/jestLogo.svg";
import reactNativeTestingLibraryLogo from "/images/techIcons/reactNativeTestingLibraryLogo.webp";

function createIcon(url: string, title: string) {
    return (
        <div className="svgComponents">
            <img src={url} width="120px" height="120px" alt={`${title} logo`} title={title} />
            <p>{title}</p>
        </div>
    )
}

export const TailwindSvg = () => createIcon(tailwindCSSLogo, 'Tailwind CSS');
export const PiniaSvg = () => createIcon(piniaLogo, 'Pinia');
export const VueSvg = () => createIcon(vueLogo, 'Vue');
export const ReduxSvg = () => createIcon(reduxLogo, 'Redux');
export const ReactNativeSvg = () => createIcon(reactNativeLogo, 'React Native');
export const ReactSvg = () => createIcon(reactLogo, 'React');
export const TypeScriptSvg = () => createIcon(typeScriptLogo, 'TypeScript');
export const SassSvg = () => createIcon(sassLogo, 'Sass');
export const StyledComponentsSvg = () => createIcon(styledComponentsLogo, 'Styled Components');
export const FigmaSvg = () => createIcon(figmaLogo, 'Figma');
export const ExpoSvg = () => createIcon(expoLogo, 'Expo');
export const QuasarSvg = () => createIcon(quasarLogo, 'Quasar');
export const HtmlSvg = () => createIcon(htmlLogo, 'HTML');
export const NextSvg = () => createIcon(nextLogo, 'Next.js');
export const JestSvg = () => createIcon(jestLogo, 'Jest');
export const reactNativeTestingLibrarySvg = () => createIcon(reactNativeTestingLibraryLogo, 'React Native Testing Library');
