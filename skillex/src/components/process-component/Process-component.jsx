import "./Process-component.scss";
import imageSrcVisualizedTeam from "../../assets/visualized-team-skill.png";
import imageSrcBuildSkill from "../../assets/build-skill-based-team.png";

function ProcessComp() {
  return (
    <div className="process-comp__container">
      <div className="process-comp__item">
      <div className="process-comp__item__container">
        <h2 className="process-comp__item__title">Visualized Team Skills</h2>
        <img src={imageSrcVisualizedTeam} alt="What you need"></img>
        <p className="process-comp__decription">
          Get a visual overview of all the available skills in your organization
        </p>
        <a href="/" className="process-comp__item__btn">
          Learn More
        </a>
        </div>
      </div>
      <div className="process-comp__item">
      <div className="process-comp__item__container">
        <h2 className="process-comp__item__title">Build Skills Based Teams</h2>
        <img src={imageSrcBuildSkill} alt="What you need"></img>
        <p className="process-comp__decription">
          Build autonomous agile high performing teams
        </p>
        <a href="/" className="process-comp__item__btn">
          Learn More
        </a>
      </div>
      </div>
    </div>
  );
}

export default ProcessComp;
