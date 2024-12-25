import { useMemo } from "react";
import { useTranslation } from "react-i18next"
import { ButtonChangerStyled } from "./stylesChanger";

export default function LanguageChanger() {
    const { t, i18n } = useTranslation();

    const changesLanguage = useMemo(() => { 
        const isPtBR = i18n.language == 'pt-BR';
        return {
            languageToChange: isPtBR ? "en-US" : "pt-BR",
            flag: {
                src: isPtBR ? "/images/flags/Brazil_icon.svg" : "/images/flags/UnitedStates_icon.svg",
                alt: isPtBR ? t("general.flags.brazilFlagAlt") : t("general.flags.UnitedStatesFlagAlt"),
            },
        }
    }, [i18n.language])


    function changeLanguage() {
        i18n.changeLanguage(changesLanguage.languageToChange)
    }

    console.log(i18n.language);

    return (
        <ButtonChangerStyled onClick={changeLanguage}><img src={changesLanguage.flag.src} alt={changesLanguage.flag.alt} /></ButtonChangerStyled>
    )
}