import { HorizontalPadding, VerticalPadding, MaxWidthCapsule } from "../../../styles/GlobalStyle";
import { AchievementsStyle } from "../../../styles/mainStyles/AchievementsStyle.styles";
import { achievementsData } from "./achievementsData";

export default function AchievementsSection() {
  return (
    <AchievementsStyle id="conquistas">
      <VerticalPadding>

        <HorizontalPadding>
          <h2>Conquistas</h2>
        </HorizontalPadding>

        <MaxWidthCapsule>
          <div>
            {achievementsData.map((achievement, keyItem) => {
              return (
                <article key={keyItem} className="articleAchievement">
                  <img src={achievement.img.src} alt={achievement.img.alt}/>
                </article>
              )
            })}
          </div>
        </MaxWidthCapsule>

      </VerticalPadding>
    </AchievementsStyle>


  );
}
