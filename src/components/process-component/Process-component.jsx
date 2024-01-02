import Image from "next/image";
import "./Process-component.scss";
import visualizedImg from "../../assets/visualized-team-skill.png";
import buildSkillsImg from "../../assets/build-skill-based-team.png";

function ProcessComp() {
  return (
    <div className="process-comp__container">
      <div className="process-comp__item">
        <div className="process-comp__item__container">
          <h2 className="process-comp__item__title">Visualized Team Skills</h2>
          <Image
            src={visualizedImg}
            alt="Visualized Team Skills"
            width={350}
            height={250}
          />
          <p className="process-comp__item__decription">
            Get a visual overview of all the available skills in your
            organization
          </p>
          <a href="/" className="process-comp__item__btn">
            Learn More
            <div
              className="right-arrow"
              dangerouslySetInnerHTML={{
                __html: `
                  <svg width="21" height="7" viewBox="0 0 21 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 3H0V4H0.5V3ZM20.5 3.5L15.5 0.613249V6.38675L20.5 3.5ZM0.5 4H16V3H0.5V4Z" fill="black"/>
                  </svg>
                  
                `,
              }}
            />
          </a>
        </div>
      </div>
      <div className="process-comp__item">
        <div className="process-comp__item__container">
          <h2 className="process-comp__item__title">
            Build Skills Based Teams
          </h2>
          <Image
            src={buildSkillsImg}
            alt="Build Skills Based Teams"
            width={350}
            height={250}
          />
          <p className="process-comp__item__decription">
            Build autonomous agile high performing teams
          </p>
          <a href="/" className="process-comp__item__btn">
            Learn More
            <div
              className="right-arrow"
              dangerouslySetInnerHTML={{
                __html: `
                  <svg width="21" height="7" viewBox="0 0 21 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 3H0V4H0.5V3ZM20.5 3.5L15.5 0.613249V6.38675L20.5 3.5ZM0.5 4H16V3H0.5V4Z" fill="black"/>
                  </svg>
                  
                  `,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProcessComp;
