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
          <div className="containerAchievements">
            {achievementsData.map((achievement, keyItem) => {
              return (
                <article key={keyItem} className="articleAchievement">
                  <div className="divImg">
                    <img src={achievement.img.src} alt={achievement.img.alt} />
                  </div>
                </article>
              )
            })}
          </div>
        </MaxWidthCapsule>

      </VerticalPadding>
    </AchievementsStyle>


  );
}
