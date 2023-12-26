import "./Image-with-cta.scss";
import imageSrcWhatYouNeed from "../../assets/what-you-need.png";
import imageSrcWhoHasSkill from "../../assets/who-has-skill.png";
import imageSrcBuildTeam from '../../assets/build-team.png';

function ImageWithCta() {
  return (
    <div className="image-cta__container container">
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Search
        </a>
        <h2 className="image-cta__item__title">What you need</h2>
        <img src={imageSrcWhatYouNeed} alt="What you need"></img>
      </div>
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Discover
        </a>
        <h2 className="image-cta__item__title">Who has the skill</h2>
        <img src={imageSrcWhoHasSkill} alt="Who has the skill"></img>
      </div>
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Build
        </a>
        <h2 className="image-cta__item__title">Build Your Team</h2>
        <img src={imageSrcBuildTeam} alt="Build Your Team"></img>
      </div>
    </div>
  );
}

export default ImageWithCta;
