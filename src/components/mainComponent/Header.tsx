import { BackgroundHeader, FixedHeaderDiv, HeaderStyle, LogoLink } from "../../styles/mainStyles/Header.styles";
import { HorizontalPadding, MaxWidthCapsule } from "../../styles/GlobalStyle";

export default function Header() {
  function hamburguerFunction() {
    const menu = document.querySelector(".hamburguerMenu");

    const nav = document.querySelector(".navHeader");

    menu?.classList.toggle("active");

    nav?.classList.toggle("active");

    menu?.setAttribute('aria-expanded', menu?.classList.contains('active').toString());

  }

  return (
    <HeaderStyle>
      <FixedHeaderDiv>
        <HorizontalPadding>
          <MaxWidthCapsule>
            <div className="flexHeader">
              <BackgroundHeader className="zIndexTop" />
              <LogoLink href="#" className="zIndexTop">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Henrique logo</title>
                  <g clipPath="url(#clip0_213_8)">
                    <circle cx="30" cy="30" r="29" fill="#D53453" />
                    <path d="M14.1605 49V12.6364H21.8487V27.6399H37.456V12.6364H45.1264V49H37.456V33.9787H21.8487V49H14.1605Z" fill="#F2F2F2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_213_8">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </LogoLink>

              <nav className="navHeader" id="navHeaderId">
                <ul>
                  <li>
                    <a href="#sobre">Sobre</a>
                  </li>
                  <li>
                    <a href="#tecnologias">Tecnologias</a>
                  </li>
                  <li>
                    <a href="#projetos">Projetos</a>
                  </li>
                  <li>
                    <a href="#conquistas">Conquistas</a>
                  </li>
                  <li>
                    <a href="#experiencias">Experiências</a>
                  </li>
                  <li>
                    <a href="#contato">Contato</a>
                  </li>
                </ul>
              </nav>

              <button className="hamburguerMenu zIndexTop" title="Hamburguer Menu" onClick={() => hamburguerFunction()} aria-expanded="false" aria-label="Botão que expande a navBar no celular">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </MaxWidthCapsule>
        </HorizontalPadding>
      </FixedHeaderDiv>
    </HeaderStyle>
  );
}
