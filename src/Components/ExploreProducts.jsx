import './exploreProducts.css'
import ProductCard from './ProductCard'
import { exploreProducts } from '../data/exploreProducts'

function ExploreProducts() {
  return (
    <section className="explore-products py-5">
      <div className="container">
        <div className="mb-5 section-small">
          <small><span></span>Our Products</small>

          <h2 className="fw-bold mt-2">Explore Our Products</h2>
        </div>

        <div className="row">
          {exploreProducts.map((product,i) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <ProductCard
                {...product}
                showDiscount={false}
                badge={product.badge}
                index={i}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-danger px-5 py-2">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default ExploreProducts
