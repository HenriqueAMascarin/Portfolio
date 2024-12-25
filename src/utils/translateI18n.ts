import { useTranslation } from "react-i18next";

export default function translateI18n (text: string){
    const { t } = useTranslation();

    return t(text);
}

