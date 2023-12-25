import "./Process-component.scss";
import imageSrc1 from "../../assets/visualized-team-skill.png";
import imageSrc2 from "../../assets/build-skill-based-team.png";

function ProcessComp() {
  return (
    <div className="process-comp__container">
      <div className="process-comp__item">
      <div className="process-comp__item__container">
        <h2 className="process-comp__item__title">Visualized Team Skills</h2>
        <img src={imageSrc1} alt="What you need"></img>
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
        <img src={imageSrc2} alt="What you need"></img>
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
