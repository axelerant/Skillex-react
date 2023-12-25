import imageTagSrc from '../../assets/tags.png'
import './Tags.scss'

function Tags() {
  return(<div className="tags__container container">
    <p className="tags__text">500+ TEAMS ON Skillex</p>
    <div className="tags__image">
      <img src={imageTagSrc} alt='Skillex tags'></img>
    </div>

  </div>)
}

export default Tags