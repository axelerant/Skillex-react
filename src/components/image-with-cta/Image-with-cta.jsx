import Image from "next/image";
import "./Image-with-cta.scss";
import whatYouNeedImg from '../../assets/what-you-need.png'
import whoHasSkillImg from '../../assets/who-has-skill.png'
import buildTeamImg from '../../assets/build-team.png'

function ImageWithCta() {
  return (
    <div className="image-cta__container container">
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Search
        </a>
        <h2 className="image-cta__item__title">What you need</h2>
        <Image src={whatYouNeedImg} alt="What you need" width={350} height={333} />
      </div>
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Discover
        </a>
        <h2 className="image-cta__item__title">Who has the skill</h2>
        <Image src={whoHasSkillImg} alt="Who has the skill" width={350} height={333} />
      </div>
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Build
        </a>
        <h2 className="image-cta__item__title">Build Your team</h2>
        <Image src={buildTeamImg} alt="Build Your team" width={350} height={333}  />
      </div>
    </div>
  );
}

export default ImageWithCta;
