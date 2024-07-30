
import { FatherThanks } from "../../styles/thanksStyles/FatherThanks.styles";
import Footer from "../mainComponent/Footer";
import CleanHeader from "../others/CleanHeader";
import ThanksMain from "./ThanksMain";

export default function Thanks() {

    setTimeout(() => {
        window.open('https://www.linkedin.com/in/henriqueamasc/', '_blank')
    }, 1500);

    return (
        <>
            <FatherThanks>
                <CleanHeader />
                <ThanksMain />
                <Footer />
            </FatherThanks>
        </>
    )
}