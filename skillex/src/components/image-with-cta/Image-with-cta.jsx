import "./Image-with-cta.scss";
import imageSrc1 from "../../assets/what-you-need.png";
import imageSrc2 from "../../assets/who-has-skill.png";
import imageSrc3 from '../../assets/build-team.png';

function ImageWithCta() {
  return (
    <div className="image-cta__container container">
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Search
        </a>
        <h2 className="image-cta__item__title">What you need</h2>
        <img src={imageSrc1} alt="What you need"></img>
      </div>
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Discover
        </a>
        <h2 className="image-cta__item__title">What you need</h2>
        <img src={imageSrc2} alt="What you need"></img>
      </div>
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Build
        </a>
        <h2 className="image-cta__item__title">What you need</h2>
        <img src={imageSrc3} alt="What you need"></img>
      </div>
    </div>
  );
}

export default ImageWithCta;
