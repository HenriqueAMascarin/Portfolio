import { HorizontalPadding } from "../../styles/GlobalStyle";
import { HeaderStyle, LogoStyle } from "../../styles/mainStyles/Header.styles";

export default function ThanksHeader(){
    return(
        <HeaderStyle>
            <div className="fixedDiv">
                <div className="backgroundDiv"/>
            <HorizontalPadding>
                    <LogoStyle href="#" title="Henrique Logo">H</LogoStyle>
            </HorizontalPadding>
            </div>
        </HeaderStyle>
    )
}