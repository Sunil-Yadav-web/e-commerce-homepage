import './bestSelling.css'
import ProductCard from './ProductCard'
import { bestSellingProducts } from '../data/bestSellingProducts'

function BestSelling() {
  return (
    <section className="best-selling py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div className='section-small'>
             <small>
                <span></span>This Month
              </small>

            <h2 className="section-title">Best Selling Products</h2>
          </div>

          <button className="btn btn-danger px-4">View All</button>
        </div>

        <div className="row">
          {bestSellingProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSelling
