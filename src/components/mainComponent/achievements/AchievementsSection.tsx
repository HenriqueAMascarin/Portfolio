import { useState } from "react";
import { HorizontalPadding, VerticalPadding, MaxWidthCapsule } from "../../../styles/GlobalStyle";
import { AchievementsStyle, ArticleAchievement } from "../../../styles/mainStyles/AchievementsStyle.styles";
import { achievementsData } from "./achievementsData";

export default function AchievementsSection() {

  const [achievements, changeAchievements] = useState(achievementsData);

  function clickAchievement(selected: typeof achievementsData[0]) {
    const newAchievements = [...achievements];

    const achievementsId = newAchievements.findIndex((achievement) => achievement == selected);

    newAchievements.filter((achievement) => achievement != selected).forEach((achievement) => achievement.isOpen = false);

    newAchievements[achievementsId].isOpen = !newAchievements[achievementsId].isOpen;

    return changeAchievements([...newAchievements]);
  }

  return (
    <AchievementsStyle id="conquistas">
      <VerticalPadding>

        <HorizontalPadding>
          <h2>Conquistas</h2>
        </HorizontalPadding>


        <div className="containerAchievements">
          {achievements.map((achievement, keyItem) => {
            return (
              <ArticleAchievement key={keyItem} achievementBG={achievement.img.src} >
                <div className="divImg outlineAchievements" role="img" aria-label={achievement.img.alt} onClick={() => clickAchievement(achievement)}></div>

                <div className={achievement.isOpen ? 'isOpenAbout containerAbout' : 'containerAbout'}>
                  <div className={achievement.isOpen ? 'isOpenAbout aboutDiv outlineAchievements' : 'aboutDiv'}>
                    <div>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.about}</p>
                    </div>
                  </div>
                </div>
              </ArticleAchievement>
            )
          })}
        </div>


      </VerticalPadding>
    </AchievementsStyle>


  );
}
