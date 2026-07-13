import './flashSales.css'
import { flashProducts } from '../data/product.js'
import ProductCard from './ProductCard.jsx'
import LeftArrow from '../assets/images/Left Arrow.png'
import RightArrow from '../assets/images/Right Arrow.png'

function FlashSales() {
  return (
    <section className="flash-sales py-5 my-5">
      <div className="container">
        <div className="row py-3">
          <div className="col ">
            <div className="section-title">
              <small>
                <span></span>Today's
              </small>
            </div>
            <div className="d-flex justify-content-start gap-5 align-items-end section-title2 ">
              <h2 className="flash-h2">Flash Sales</h2>
              <div className="countdown">
                <div>
                  <span>Days</span>
                  <h3 className="d-flex gap-3">
                    03<span className="dot-bg">:</span>
                  </h3>
                </div>

                <div>
                  <span>Hours</span>
                  <h3 className="d-flex gap-3">
                    23<span className="dot-bg">:</span>
                  </h3>
                </div>

                <div>
                  <span>Minutes</span>
                  <h3 className="d-flex gap-3">
                    19 <span className="dot-bg">:</span>
                  </h3>
                </div>

                <div>
                  <span>Seconds</span>
                  <h3>56</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col align-self-end">
            <div className="d-flex justify-content-end gap-2 ">
              <img src={LeftArrow} alt="LeftArrow" />
              <img src={RightArrow} alt="RightArrow" />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {flashProducts.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={item.id}>
              <ProductCard {...item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-danger px-5">View All Products</button>
        </div>
      </div>
    </section>
  )
}

export default FlashSales
