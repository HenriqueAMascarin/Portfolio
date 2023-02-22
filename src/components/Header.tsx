import { HeaderStyle, LogoStyle, HamburguerMenu, NavHeader, BackgroundDiv, FixedDiv } from "../styles/Header.styles";
import { MarginCapsule } from "../styles/GlobalStyle";

export default function Header() {
    function hamburguerFunction() {
        const menu = document.querySelector(HamburguerMenu);
        const nav = document.querySelector(NavHeader);
        menu?.classList.toggle("active");
        nav?.classList.toggle("active");
    }

    return (
        <HeaderStyle>
            <FixedDiv>
                <BackgroundDiv />
                <MarginCapsule>
                    <LogoStyle href="#" title="Henrique Logo">H</LogoStyle>

                    <NavHeader>
                        <ul>
                            <li><a href="#info">Sobre</a></li>
                            <li><a href="#technologies">Tecnologias</a></li>
                            <li><a href="#projects">Projetos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </NavHeader>

                    <HamburguerMenu title="Hamburguer Menu" onClick={() => hamburguerFunction()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </HamburguerMenu>
                </MarginCapsule>
            </FixedDiv>
        </HeaderStyle>
    )
}