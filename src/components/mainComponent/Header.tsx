import { BackgroundDiv, FixedDiv, HeaderStyle, LogoStyle} from "../../styles/mainStyles/Header.styles";
import { HorizontalPadding } from "../../styles/GlobalStyle";

export default function Header() {
    function hamburguerFunction() {
        const menu = document.querySelector(".hamburguerMenu");
        const nav = document.querySelector(".navHeader");
        menu?.classList.toggle("active");
        nav?.classList.toggle("active");
    }

    return (
        <HeaderStyle>
            <FixedDiv>
                <BackgroundDiv/>
                <HorizontalPadding>
                    <LogoStyle href="#" aria-label="Henrique logo">H</LogoStyle>

                    <nav className="navHeader">
                        <ul>
                            <li><a href="#info">Sobre</a></li>
                            <li><a href="#technologies">Tecnologias</a></li>
                            <li><a href="#projects">Projetos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </nav>

                    <button className="hamburguerMenu" title="Hamburguer Menu" onClick={() => hamburguerFunction()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </HorizontalPadding>
            </FixedDiv>
        </HeaderStyle>
    )
}