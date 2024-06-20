import { useState } from "react";
import { HorizontalPadding, VerticalPadding } from "../../../styles/GlobalStyle";
import { AchievementsStyle, ArticleAchievement } from "../../../styles/mainStyles/AchievementsStyle.styles";
import { achievementsData } from "./achievementsData";

export default function AchievementsSection() {

  const [achievements, changeAchievements] = useState(achievementsData);
  const [selectedInfoModal, changeSelectedInfoModal] = useState<null | typeof achievementsData[0]>(null);


  function clickAchievement(selected: typeof achievementsData[0]) {
    const newAchievements = [...achievements];

    const achievementsId = newAchievements.findIndex((achievement) => achievement == selected);

    newAchievements.filter((achievement) => achievement != selected).forEach((achievement) => achievement.isOpen = false);

    newAchievements[achievementsId].isOpen = !newAchievements[achievementsId].isOpen;

    return changeAchievements([...newAchievements]);
  }

  return (
    <AchievementsStyle id="conquistas">

      {selectedInfoModal != null &&
        <div className="modal">
          <div className="containerInfoModal">
            <div className="cancelIconDiv"><img src="/src/assets/images/cancel.svg" alt="CancelSvg" className="cancelIcon" width="48px" height="48px" onClick={() => changeSelectedInfoModal(null)} /></div>
            <img src={selectedInfoModal?.img?.src} alt={selectedInfoModal?.img?.alt} className="imageInfo" ></img>
          </div>
        </div>
      }

      <VerticalPadding>

        <HorizontalPadding>
          <h2>Conquistas</h2>
        </HorizontalPadding>


        <div className="containerAchievements">
          {achievements.map((achievement, keyItem) => {
            return (
              <ArticleAchievement key={keyItem} achievementBG={achievement.img.src} className={achievement.isOpen ? 'isOpenAbout' : ''}>
                <div className="divImg outlineAchievements" role="img" aria-label={achievement.img.alt} onClick={() => clickAchievement(achievement)}></div>

                <div className="containerAbout">
                  <div className={achievement.isOpen ? 'aboutDiv outlineAchievements' : 'aboutDiv'}>
                    <div className="infoFlex">
                      <div aria-label={achievement.img.alt} className="infoImage outlineAchievements" onClick={() => changeSelectedInfoModal(achievement)} />
                      <div className="textAbout">
                        <h4>{achievement.title}</h4>
                        <p>{achievement.about}</p>
                      </div>
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
