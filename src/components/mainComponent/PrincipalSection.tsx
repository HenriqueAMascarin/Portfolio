import { HorizontalPadding, MaxWidthCapsule } from "../../styles/GlobalStyle";
import { SectionPrincipal } from "../../styles/mainStyles/Principal.styles";
import translateI18n from "../../utils/translateI18n";

export default function PrincipalSection() {

  return (
    <SectionPrincipal className="principalSections">
      <HorizontalPadding>
        <MaxWidthCapsule>
          <div className="principalDiv">
            <h1>
              Henrique<span>Mascarin</span>
              <span className="titleJob">
                {translateI18n("mainPage.nameSection.mobileDeveloper")}
              </span>
            </h1>

            <a href="#sobre">
              <svg width="82" height="53" viewBox="0 0 82 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>{translateI18n("mainPage.nameSection.arrowDown")}</title>
                <g filter="url(#filter0_d_213_27)">
                  <path d="M38.1242 47.8064L5.19125 14.8059C3.60292 13.2144 3.60292 10.634 5.19125 9.0426L9.03235 5.19364C10.618 3.60478 13.1878 3.60173 14.7771 5.18685L41.0001 31.3403L67.2229 5.18685C68.8122 3.60173 71.382 3.60478 72.9677 5.19364L76.8088 9.0426C78.3971 10.6342 78.3971 13.2145 76.8088 14.8059L43.876 47.8064C42.2876 49.3979 39.7125 49.3979 38.1242 47.8064Z" fill="#f93259" />
                  <path d="M37.4164 48.5128L37.4164 48.5129C39.3954 50.4957 42.6047 50.4957 44.5837 48.5129L44.5838 48.5128L77.5165 15.5124C77.5166 15.5124 77.5166 15.5123 77.5166 15.5123C79.4945 13.5305 79.4944 10.3181 77.5166 8.33622L73.6755 4.48726C71.6998 2.50757 68.497 2.50375 66.5167 4.47881L41.0001 29.928L15.4833 4.47881L14.7771 5.18685L15.4833 4.47881C13.503 2.50375 10.3002 2.50757 8.32452 4.48726L4.48346 8.33618C4.48344 8.33619 4.48343 8.33621 4.48342 8.33622C2.50549 10.318 2.50556 13.5304 4.48342 15.5123L37.4164 48.5128Z" stroke="white" strokeWidth="2" />
                </g>
                <defs>
                  <filter id="filter0_d_213_27" x="0" y="0" width="82" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_213_27" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_213_27" result="shape" />
                  </filter>
                </defs>
              </svg>

            </a>
          </div>
        </MaxWidthCapsule>
      </HorizontalPadding>
    </SectionPrincipal>
  );
}
