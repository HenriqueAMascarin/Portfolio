import { HorizontalPadding, MaxWidthCapsule } from "../../styles/GlobalStyle";
import { SectionPrincipal } from "../../styles/mainStyles/Principal.styles";

export default function PrincipalSection() {
  return (
    <SectionPrincipal>
      <HorizontalPadding>
        <MaxWidthCapsule>
          <div className="principalDiv">
            <div className="titleDiv">
              <h1>
                Henrique<span>Mascarin</span>
              </h1>
              <p>
                desenvolvedor <span>front-end</span>
              </p>
            </div>

            <a href="#sobre">
              <svg viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Seta para ir na sessão abaixo</title>
                <path
                  d="M17.9844 23.0401L0.627819 5.6834C-0.209273 4.84631 -0.209273 3.48917 0.627819 2.65216L2.65218 0.627799C3.48785 -0.207865 4.84222 -0.209473 5.67985 0.624226L19.5 14.3797L33.3202 0.624226C34.1578 -0.209473 35.5122 -0.207865 36.3478 0.627799L38.3722 2.65216C39.2093 3.48926 39.2093 4.8464 38.3722 5.6834L21.0157 23.0401C20.1786 23.8771 18.8215 23.8771 17.9844 23.0401Z"
                  fill="#D53453"
                />
              </svg>
            </a>
          </div>
        </MaxWidthCapsule>
      </HorizontalPadding>
    </SectionPrincipal>
  );
}
