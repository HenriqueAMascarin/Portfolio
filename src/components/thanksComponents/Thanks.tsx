import { FatherThanks } from "../../styles/thanksStyles/FatherThanks.styles";
import Footer from "../mainComponent/Footer";
import ThanksHeader from "./ThanksHeader";
import ThanksMain from "./ThanksMain";

export default function Thanks(){
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