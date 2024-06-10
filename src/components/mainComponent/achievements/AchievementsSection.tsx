import { HorizontalPadding, VerticalPadding, MaxWidthCapsule } from "../../../styles/GlobalStyle";
import { AchievementsStyle } from "../../../styles/mainStyles/AchievementsStyle.styles";

export default function AchievementsSection() {
  return (
    <AchievementsStyle id="conquistas">
      <VerticalPadding>

        <HorizontalPadding>
          <MaxWidthCapsule>
            <div>
              <h2>Conquistas</h2>
            </div>
          </MaxWidthCapsule>
        </HorizontalPadding>

      </VerticalPadding>
    </AchievementsStyle>


  );
}
