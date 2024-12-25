import { useTranslation } from "react-i18next";

export default function translateI18n (text: string){
    const { t } = useTranslation();
    console.log(t)
    return t(text);
}

