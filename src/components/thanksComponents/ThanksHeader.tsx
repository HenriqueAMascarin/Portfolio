import { HorizontalPadding, MaxWidthCapsule } from "../../styles/GlobalStyle";
import { FixedHeaderDiv, LogoLink, BackgroundHeader } from "../../styles/mainStyles/Header.styles";
import { HeaderThanks } from "../../styles/thanksStyles/HeaderThanks";

export default function ThanksHeader() {
  return (
    <HeaderThanks>
      <FixedHeaderDiv>
        <HorizontalPadding>

          <MaxWidthCapsule>
            <div className="flexThanksHeader">
              <BackgroundHeader />
              <LogoLink href="/" aria-label="Henrique logo">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </MaxWidthCapsule>

        </HorizontalPadding>
      </FixedHeaderDiv>
    </HeaderThanks>
  );
}
