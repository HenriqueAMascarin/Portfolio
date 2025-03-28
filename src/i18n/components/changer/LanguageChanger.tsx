import { useMemo } from "react";
import { useTranslation } from "react-i18next"
import { ButtonChangerStyled } from "./stylesChanger";

export default function LanguageChanger() {
    const { t: translate, i18n } = useTranslation();

    const changesLanguage = useMemo(() => {
        const isPtBR = i18n.language == 'pt-BR';
        return {
            languageToChange: isPtBR ? "en-US" : "pt-BR",
            flag: {
                src: isPtBR ? "/images/flags/Brazil_icon.svg" : "/images/flags/UnitedStates_icon.svg",
                alt: isPtBR ? translate("general.flags.brazilFlagAlt") : translate("general.flags.UnitedStatesFlagAlt"),
            },
        }
    }, [i18n.language])


    function changeLanguage() {
        i18n.changeLanguage(changesLanguage.languageToChange)
    }

    return (
        <ButtonChangerStyled onClick={changeLanguage} aria-label={translate("general.themeChanger.btnAria")}>
            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>{translate("general.themeChanger.fingerPointerTitle")}</title>
                <path d="M11.1228 32.3347L11.1231 32.335C11.7118 32.9382 12.3883 33.4004 13.1516 33.7204C13.9143 34.0401 14.7123 34.2 15.5438 34.2H23.9481C26.2174 34.2 28.1642 33.3696 29.7779 31.7163C31.3914 30.0631 32.2 28.0707 32.2 25.75V17.5C32.2 16.8668 31.989 16.3258 31.5644 15.8908C31.1396 15.4555 30.6093 15.2375 29.987 15.2375C29.3647 15.2375 28.8344 15.4555 28.4096 15.8908C28.2464 16.058 28.1135 16.2422 28.0122 16.4432C27.7711 16.9217 27.3993 17.3 26.9675 17.3C26.524 17.3 26.161 16.9401 26.161 16.5V13.375C26.161 12.7418 25.95 12.2008 25.5254 11.7658C25.1006 11.3305 24.5703 11.1125 23.9481 11.1125C23.3258 11.1125 22.7955 11.3305 22.3707 11.7658C21.9461 12.2008 21.7351 12.7418 21.7351 13.375V16.5C21.7351 16.9401 21.3721 17.3 20.9286 17.3C20.4851 17.3 20.1221 16.9401 20.1221 16.5V11.3125C20.1221 10.6793 19.911 10.1383 19.4865 9.70328C19.0617 9.26802 18.5314 9.05 17.9091 9.05C17.2868 9.05 16.7565 9.26802 16.3317 9.70328C15.9072 10.1383 15.6961 10.6793 15.6961 11.3125V16.5C15.6961 16.9401 15.3331 17.3 14.8896 17.3C14.4461 17.3 14.0831 16.9401 14.0831 16.5V3.0625C14.0831 2.42927 13.8721 1.88827 13.4475 1.45328C13.0227 1.01802 12.4924 0.8 11.8701 0.8C11.2479 0.8 10.7176 1.01802 10.2927 1.45328C9.86819 1.88827 9.65714 2.42927 9.65714 3.0625V18.5859C9.65714 19.1202 9.14333 19.5044 8.63082 19.3532L6.5923 18.7519L6.59191 18.7518C5.85195 18.5352 5.10206 18.5264 4.34621 18.7245C3.58866 18.9231 2.92795 19.3117 2.36661 19.8869L2.36659 19.8869L2.36434 19.8892L1.51226 20.7914C1.07101 21.2586 1.07611 21.9904 1.52383 22.4514L11.1228 32.3347Z" fill="#f93259" stroke="#f93259" strokeWidth="0.4" />
            </svg>
            <img src={changesLanguage.flag.src} alt={changesLanguage.flag.alt} />
        </ButtonChangerStyled>
    )
}