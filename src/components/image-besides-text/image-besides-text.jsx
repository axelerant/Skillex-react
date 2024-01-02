import "./image-besides-text.scss";
import Image from "next/image";
import ibtSillexImg from "../../assets/ibt-skillex-image.png";

function ImageBesidesText() {
  return (
    <div className="ibt__container container">
      <div className="ibt__text-content">
        <h1 className="ibt__title">Optimise the skills in your organisation</h1>
        <p className="ibt__description">
          Skillex is a skills management platform that helps you focus on what
          matters most, people.
        </p>
        <div className="ibt__links">
          <a href="/" className="black-bg-btn ibt__signUp">
            Sign Up For Free
          </a>
          <a href="/" className="white-bg-btn ibt__demo">
            Demo
            <div class='demo-icon'
              dangerouslySetInnerHTML={{
                __html: `<svg width="31" height="18" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.53012 18H19.8072C21.2169 18 22.3373 16.8795 22.3373 15.4699V13.9518L26.8554 16.8795C27.1807 17.0964 27.5783 17.2048 27.9759 17.2048C28.3012 17.2048 28.6627 17.1325 28.9518 16.9518C29.6386 16.5904 30.0361 15.8675 30.0361 15.1084V2.89157C30.0361 2.13253 29.6024 1.40964 28.9518 1.04819C28.3012 0.686747 27.506 0.722892 26.8554 1.12048L22.3373 4.04819V2.53012C22.3373 1.12048 21.2169 0 19.8072 0H2.53012C1.12048 0 0 1.12048 0 2.53012V15.506C0 16.8795 1.12048 18 2.53012 18ZM27.8313 3.07229V14.9277L22.3012 11.3855V6.61446L27.8313 3.07229ZM2.53012 2.16867C2.31325 2.16867 2.16867 2.31325 2.16867 2.53012V15.506C2.16867 15.7229 2.31325 15.8675 2.53012 15.8675H19.8072C20.0241 15.8675 20.1687 15.7229 20.1687 15.506V2.53012C20.1687 2.31325 20.0241 2.16867 19.8072 2.16867H2.53012Z" fill="black"/>
</svg>
`,
              }}
            />
          </a>
        </div>
      </div>
      <div className="ibt__image-content">
        <Image src={ibtSillexImg} alt="IBT" width={500} height={500} />
      </div>
    </div>
  );
}
export default ImageBesidesText;
