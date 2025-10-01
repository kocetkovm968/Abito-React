import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ id, title, price, adress, date, image }) => {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card--img">
        <img src={image} alt="card-img" />
      </div>
      <h5 className="card--title">{title}</h5>
      <strong className="card--price">{price}</strong>
      <div className="card--desc-box">
        <span className="ccard--desc">{adress}</span>
        <span className="card--desc">{date}</span>
      </div>
    </Link>
  )
}