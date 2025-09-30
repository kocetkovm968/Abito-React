import './Side.css'

export const Side = ({ title, text, image }) => {
  return (
    <div className="content-side__list-item">
      <img src={image} alt="side-info" className="content-side__list-item--img" />
      <h5 className="content-side__list-item--title">{title}</h5>
      <p className="content-side__list-item--text">
        {text}
      </p>
    </div>
  )
}