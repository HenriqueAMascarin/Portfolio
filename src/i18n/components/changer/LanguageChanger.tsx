import { useMemo } from "react";
import { useTranslation } from "react-i18next"
import { ButtonChangerStyled } from "./stylesChanger";

export default function LanguageChanger() {
    const { t:translate, i18n } = useTranslation();

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
        <ButtonChangerStyled onClick={changeLanguage} aria-label={translate("general.themeChangerBtnAria")}><img src={changesLanguage.flag.src} alt={changesLanguage.flag.alt} /></ButtonChangerStyled>
    )
}