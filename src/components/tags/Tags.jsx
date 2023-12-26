import Image from "next/image";
import "./Tags.scss";

function Tags() {
  return (
    <div className="tags__container container">
      <p className="tags__text">500+ TEAMS ON Skillex</p>
      <div className="tags__image">
        <Image src="../../assets/tags.png" alt="Skillex tags" />
      </div>
    </div>
  );
}

export default Tags;
