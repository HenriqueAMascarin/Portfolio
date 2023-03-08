import { HorizontalPadding } from "../../styles/GlobalStyle";
import { BackgroundDiv, FixedDiv, HeaderStyle, LogoStyle } from "../../styles/mainStyles/Header.styles";
import { HeaderThanks } from "../../styles/thanksStyles/ThanksStyle";

export default function ThanksHeader(){
    return(
        <HeaderThanks>
            <FixedDiv>
                <BackgroundDiv/>
                <HorizontalPadding>
                        <LogoStyle href="#" aria-label="Henrique Logo">H</LogoStyle>
                </HorizontalPadding>
            </FixedDiv>
        </HeaderThanks>
    )
}