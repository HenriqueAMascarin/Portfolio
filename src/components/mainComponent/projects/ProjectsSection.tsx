import { arrayCards } from "./cardsData";
import { Projects } from "../../../styles/mainStyles/ProjectsSection.styles";
import { HorizontalPadding, MaxWidthCapsule, VerticalPadding } from "../../../styles/GlobalStyle";

export default function ProjectsSection() {
  return (
    <Projects id="projetos">
      <VerticalPadding>
        <h2>Projetos</h2>

        <div className="cards">
          {arrayCards.map((project, key) => {
            return (
              <HorizontalPadding key={key}>
                <MaxWidthCapsule>
                  <div className="cardsDiv" id={project.id}>
                    <img width="768" height="581" src={project.img} alt={project.alt} className="cardsImg" />
                    <div className="infoCard">
                      <h3 >{project.title}</h3>
                      <p>{project.info}</p>

                      <div className="cardsTech">
                        {project.technologies.map((icon, key) => (
                          <img src={icon.img} alt={icon.alt} key={key} title={icon.alt}></img>
                        ))}
                      </div>

                      <div className="cardsLinks">
                        <a href={project.liveLink ?? project.downloadApk} target="_blank" download={project.downloadApk ? true : false}>
                          {project.liveLink ? 'Veja o site' : 'Baixe o aplicativo'}
                        </a>
                        {project.figma &&
                          <a href={project.figma} target="_blank" className="figmaIcon">
                            <svg width="30" height="44" viewBox="0 0 30 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_984_14)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 22C15 17.996 18.246 14.75 22.25 14.75C26.254 14.75 29.5 17.996 29.5 22C29.5 26.004 26.254 29.25 22.25 29.25C18.246 29.25 15 26.004 15 22Z" fill="#1ABCFE" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 36.5C0.5 32.496 3.74593 29.25 7.75 29.25H15V36.5C15 40.504 11.754 43.75 7.75 43.75C3.74593 43.75 0.5 40.504 0.5 36.5Z" fill="#0ACF83" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0.25V14.75H22.25C26.254 14.75 29.5 11.504 29.5 7.5C29.5 3.49593 26.254 0.25 22.25 0.25H15Z" fill="#FF7262" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 7.5C0.5 11.504 3.74593 14.75 7.75 14.75H15V0.25H7.75C3.74593 0.25 0.5 3.49593 0.5 7.5Z" fill="#F24E1E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 22C0.5 26.004 3.74593 29.25 7.75 29.25H15V14.75H7.75C3.74593 14.75 0.5 17.996 0.5 22Z" fill="#A259FF" />
                              </g>
                              <defs>
                                <clipPath id="clip0_984_14">
                                  <rect width="30" height="44" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>

                          </a>}
                        <a href={project.github} target="_blank" className="githubIcon">
                          <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Github do projeto</title>
                            <path
                              d="M17.1523 40.2599C17.1523 40.4667 16.9145 40.6321 16.6147 40.6321C16.2735 40.6631 16.0357 40.4977 16.0357 40.2599C16.0357 40.0531 16.2735 39.8877 16.5734 39.8877C16.8835 39.8567 17.1523 40.0221 17.1523 40.2599ZM13.9369 39.7947C13.8646 40.0014 14.0713 40.2392 14.3815 40.3013C14.6503 40.4047 14.9605 40.3013 15.0225 40.0945C15.0845 39.8877 14.8881 39.6499 14.5779 39.5569C14.3091 39.4845 14.0093 39.5879 13.9369 39.7947ZM18.5067 39.6189C18.2069 39.6913 18.0001 39.8877 18.0312 40.1255C18.0622 40.3323 18.331 40.4667 18.6412 40.3943C18.941 40.322 19.1478 40.1255 19.1167 39.9187C19.0857 39.7223 18.8066 39.5879 18.5067 39.6189ZM25.3098 0C10.9696 0 0 10.8869 0 25.2271C0 36.693 7.2166 46.5047 17.5245 49.9579C18.8479 50.1957 19.3132 49.3789 19.3132 48.7069C19.3132 48.0658 19.2822 44.5299 19.2822 42.3587C19.2822 42.3587 12.0449 43.9096 10.5251 39.2777C10.5251 39.2777 9.34642 36.2691 7.65083 35.4937C7.65083 35.4937 5.28321 33.8704 7.81626 33.9015C7.81626 33.9015 10.3907 34.1082 11.8071 36.5689C14.0713 40.5598 17.8657 39.4121 19.3442 38.7298C19.582 37.0755 20.254 35.9279 20.9984 35.2455C15.219 34.6045 9.38778 33.7671 9.38778 23.821C9.38778 20.9778 10.1735 19.551 11.8278 17.7313C11.559 17.0593 10.6802 14.2884 12.0966 10.7112C14.2574 10.0391 19.2305 13.5027 19.2305 13.5027C21.2983 12.9237 23.5211 12.6239 25.7233 12.6239C27.9255 12.6239 30.1484 12.9237 32.2162 13.5027C32.2162 13.5027 37.1893 10.0288 39.3501 10.7112C40.7665 14.2988 39.8877 17.0593 39.6189 17.7313C41.2731 19.5613 42.2864 20.9881 42.2864 23.821C42.2864 33.7981 36.1967 34.5942 30.4172 35.2455C31.3684 36.0623 32.1749 37.6131 32.1749 40.0428C32.1749 43.527 32.1438 47.8384 32.1438 48.6862C32.1438 49.3582 32.6194 50.175 33.9325 49.9372C44.2714 46.5047 51.2813 36.693 51.2813 25.2271C51.2813 10.8869 39.6499 0 25.3098 0ZM10.0495 35.6591C9.91507 35.7625 9.94608 36.0003 10.1218 36.1967C10.2873 36.3621 10.5251 36.4345 10.6595 36.3001C10.7939 36.1967 10.7629 35.9589 10.5871 35.7625C10.4217 35.597 10.1839 35.5247 10.0495 35.6591ZM8.93287 34.8216C8.86049 34.956 8.96388 35.1215 9.17066 35.2248C9.33608 35.3282 9.54286 35.2972 9.61524 35.1525C9.68761 35.0181 9.58422 34.8526 9.37744 34.7493C9.17066 34.6872 9.00524 34.7182 8.93287 34.8216ZM12.2827 38.5023C12.1173 38.6367 12.1793 38.9469 12.4171 39.1433C12.6549 39.3811 12.9547 39.4121 13.0891 39.2467C13.2235 39.1123 13.1615 38.8021 12.9547 38.6057C12.7273 38.3679 12.4171 38.3369 12.2827 38.5023ZM11.104 36.9825C10.9386 37.0859 10.9386 37.3547 11.104 37.5925C11.2695 37.8303 11.5486 37.9337 11.683 37.8303C11.8485 37.6959 11.8485 37.427 11.683 37.1893C11.5383 36.9515 11.2695 36.8481 11.104 36.9825Z"
                              fill="#F2F2F2"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </MaxWidthCapsule>
              </HorizontalPadding>
            );
          })}
        </div>
      </VerticalPadding>
    </Projects>
  );
}
