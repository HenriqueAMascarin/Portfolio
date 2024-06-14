import { HorizontalPadding, VerticalPadding, MaxWidthCapsule } from "../../../styles/GlobalStyle";
import { AchievementsStyle, ArticleAchievement } from "../../../styles/mainStyles/AchievementsStyle.styles";
import { achievementsData } from "./achievementsData";

export default function AchievementsSection() {
  return (
    <AchievementsStyle id="conquistas">
      <VerticalPadding>

        <HorizontalPadding>
          <h2>Conquistas</h2>
        </HorizontalPadding>

 
          <div className="containerAchievements">
            {achievementsData.map((achievement, keyItem) => {
              return (
                <ArticleAchievement key={keyItem} achievementBG={achievement.img.src}>
                  <div className="divImg" role="img" aria-label={achievement.img.alt}></div>
                </ArticleAchievement>
              )
            })}
          </div>
  

      </VerticalPadding>
    </AchievementsStyle>


  );
}
