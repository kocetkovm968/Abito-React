import './Card.css'

export const Card = ({ title, price, adress, date, image }) => {
  return (
    <a href="product.html" className="card">
      <div className="card--img">
        <img src={image} alt="card-img" />
      </div>
      <h5 className="card--title">{title}</h5>
      <strong className="card--price">{price}</strong>
      <div className="card--desc-box">
        <span className="ccard--desc">{adress}</span>
        <span className="card--desc">{date}</span>
      </div>
    </a>
  )
}