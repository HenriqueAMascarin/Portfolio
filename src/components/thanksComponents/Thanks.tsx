import { FatherThanks } from "../../styles/thanksStyles/FatherThanks.styles";
import Footer from "../mainComponent/Footer";
import ThanksHeader from "./ThanksHeader";
import ThanksMain from "./ThanksMain";

export default function Thanks(){

    setTimeout(() => {
        window.open('https://www.linkedin.com/in/henriqueamasc/', '_blank')
    }, 1500);

    return(
        <>  
            <FatherThanks>
                <ThanksHeader/>
                <ThanksMain/>
                <Footer/>
            </FatherThanks>
        </>
    )
}