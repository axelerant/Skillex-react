import "./Sign-up-component.scss";
import Image from "next/image";
import mapTheSkillImg from '../../assets/map-the-skills.png'


function SignUp() {
  return (
    <div className="sign-up__container container">
      <div className="sign-up__image">
        <Image src={mapTheSkillImg} alt="Map the skills" width={686} height={454}/>
      </div>
      <h1 className="sign-up__title">
        Map the skills of your team in an inclusive way
      </h1>
      <p className="sign-up__description">
        Capture what the employee brings to the table and what you ask of them
        too
      </p>
      <a href="/" className="sign-up__btn black-bg-btn">
        Sign Up For free
      </a>
    </div>
  );
}
export default SignUp;
