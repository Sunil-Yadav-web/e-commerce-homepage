import './productCard.css'
import { FaStar, FaRegHeart, FaRegEye } from 'react-icons/fa'

function ProductCard({
  image,
  title,
  price,
  oldPrice,
  discount,
  rating,
  cart,
  index,
}) {
  return (
    <div className="card product-card border-0 shadow-sm">
      <div className="product-image">
        {discount && <span className="discount">{discount}</span>}

        <div className="icons">
          <FaRegHeart />
          <FaRegEye />
        </div>

        <img src={image} alt={title} className="img-fluid" />
        {cart && (
          <div className="cart-label">
            <span>Add to Cart</span>
          </div>
        )}
      </div>

      <div className="card-body">
        <h6>{title}</h6>

        <div className="price">
          <span className="new-price">${price}</span>

          <del>${oldPrice}</del>
        </div>

        <div className="rating">
          {[1, 2, 3, 4, 5].map((item) => (
            <FaStar key={item} className="star" />
          ))}

          <span>({rating})</span>
        </div>
        {index > 3 && (
          <div className="d-flex align-items-center justify-content-start gap-2 pt-1">
            <span className="circle1">
              <span
                className={
                  (index === 4
                    ? 'sub-circle-bg-red sub-circle '
                    : (index === 5)
                      ? 'sub-circle-bg-yellow sub-circle'
                      : index > 5
                        ? 'sub-circle-bg-black sub-circle'
                        : '')
                }
              ></span>
            </span>
            <span className=" circle2"></span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
