import Image from "next/image";
import "./Image-with-cta.scss";

function ImageWithCta() {
  return (
    <div className="image-cta__container container">
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Search
        </a>
        <h2 className="image-cta__item__title">What you need</h2>
        <Image src="../../assets/what-you-need.png" alt="What you need" />
      </div>
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Discover
        </a>
        <h2 className="image-cta__item__title">What you need</h2>
        <Image src="../../assets/who-has-skill.png" alt="What you need" />
      </div>
      <div className="image-cta__item">
        <a href="/" className="image-cta__item__btn">
          Build
        </a>
        <h2 className="image-cta__item__title">What you need</h2>
        <Image src="../../assets/build-team.png" alt="What you need" />
      </div>
    </div>
  );
}

export default ImageWithCta;
