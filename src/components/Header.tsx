import { HeaderStyle} from "../styles/Header.styles";
import { HorizontalPadding } from "../styles/GlobalStyle";

export default function Header() {
    function hamburguerFunction() {
        const menu = document.querySelector(".hamburguerMenu");
        const nav = document.querySelector(".navHeader");
        menu?.classList.toggle("active");
        nav?.classList.toggle("active");
    }

    return (
        <HeaderStyle>
            <div className="fixedDiv">
                <div className="backgroundDiv"/>
                <HorizontalPadding>
                    <a href="#" className="logoStyle" title="Henrique Logo">H</a>

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
            </div>
        </HeaderStyle>
    )
}