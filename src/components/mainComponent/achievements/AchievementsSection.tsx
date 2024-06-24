import { useRef, useState } from "react";
import { HorizontalPadding, VerticalPadding } from "../../../styles/GlobalStyle";
import { AchievementsStyle, ArticleAchievement } from "../../../styles/mainStyles/AchievementsStyle.styles";
import { achievementsData } from "./achievementsData";

export default function AchievementsSection() {

  const achievementsContainerRef = useRef<null | HTMLDivElement>(null);
  const [selectedInfoModal, changeSelectedInfoModal] = useState<null | typeof achievementsData[0]>(null);


  function clickAchievement(selected: number) {
    if (achievementsContainerRef.current) {

      const childrens = achievementsContainerRef.current.children;

      const className = 'isOpenAbout';

      for (let index = 0; index < childrens.length; index++) {
        if (index != selected) {
          setTimeout(() => {
            childrens[index].classList.remove(className);
          }, 50);
        }
      }

      setTimeout(() => {


        childrens[selected].classList.toggle(className);

        const hasClass = childrens[selected].classList.contains(className);

        if (hasClass) {
          // PICKS THE ABOUT DIV
          const aboutDiv = childrens[selected].querySelector('.aboutDiv');

          if (aboutDiv) {
            aboutDiv.scrollIntoView({ behavior: "smooth", block: "center", inline: 'center' });
          }
        }

      }, 180);
    }
  }

  return (
    <AchievementsStyle id="conquistas">

      {selectedInfoModal != null &&
        <div className="modal">
          <div className="containerModal">
            <img src="/src/assets/images/cancel.svg" alt="CancelSvg" className="cancelIcon" width="48px" height="48px" onClick={() => changeSelectedInfoModal(null)} />
            <div className="containerImageModal">
              <img src={selectedInfoModal?.img?.src} alt={selectedInfoModal?.img?.alt} className="imageInfo" ></img>
            </div>
          </div>

        </div>
      }

      <VerticalPadding>

        <HorizontalPadding>
          <h2>Conquistas</h2>
        </HorizontalPadding>


        <div className="containerAchievements" ref={achievementsContainerRef}>
          {achievementsData.map((achievement, keyItem) => {
            return (
              <ArticleAchievement key={keyItem} achievementBG={achievement.img.src}>
                <div className="divImg outlineAchievements" role="img" aria-label={achievement.img.alt} onClick={() => clickAchievement(keyItem)}></div>

                <div className="containerAbout containerHeight">
                  <div className="aboutDiv outlineAchievements containerHeight">
                    <div className="infoFlex">
                      <div aria-label={achievement.img.alt} className="infoImage outlineAchievements" onClick={() => changeSelectedInfoModal(achievement)} />
                      <div className="textAbout">
                        <div>
                          <h4>{achievement.title}</h4>

                          {achievement.about.map((infoText, keyText) => {
                            return (
                              <p key={keyText}>{infoText}</p>
                            )
                          })}
                        </div>

                        <a href={achievement.moreInfoLink} target="_blank">Mais informações</a>
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
