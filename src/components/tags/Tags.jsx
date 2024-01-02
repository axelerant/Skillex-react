import Image from "next/image";
import "./Tags.scss";
import tagsImg from "../../assets/tags.png"

function Tags() {
  return (
    <div className="tags__container container">
      <p className="tags__text">500+ TEAMS ON Skillex</p>
      <div className="tags__image">
        <Image src={tagsImg} alt="Skillex tags" width={900} height={100} />
      </div>
    </div>
  );
}

export default Tags;
