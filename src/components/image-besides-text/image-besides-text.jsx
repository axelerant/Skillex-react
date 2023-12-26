import "./image-besides-text.scss";
import Image from "next/image";

function ImageBesidesText() {
  return (
    <div className="ibt__container container">
      <div className="ibt__text-content">
        <h1 className="ibt__title">Optimise the skills in your organisation</h1>
        <p className="ibt__description">
          {" "}
          Skillex is a skills management platform that helps you focus on what
          matters most, people.
        </p>
        <div className="ibt__links">
          <a href="/" className="black-bg-btn ibt__signUp">
            Sign Up For Free
          </a>
          <a href="/" className="white-bg-btn ibt__demo">
            {" "}
            Demo
          </a>
        </div>
      </div>
      <div className="ibt__image-content">
        <Image
          src="/../../assets/ibt-skillex-image.png"
          alt="IBT"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
export default ImageBesidesText;
