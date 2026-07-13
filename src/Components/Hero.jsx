import './Hero.css'
import apple from '../assets/images/hero_iphone.png'
import logo from '../assets/images/Apple_logo.png'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'

function Hero() {
  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    "Baby's & Toys",
    'Groceries & Pets',
    'Health & Beauty',
  ]

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ul className="category-list border-end pt-lg-5">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  {item}
                  {index === 0 || index === 1 ? (
                    <FaChevronRight className="me-3" />
                  ) : (
                    ''
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="hero-banner mt-5 row position-relative overflow-hidden">
              <div className="col">
                <div className="d-flex justify-content-justify-content-start align-items-center gap-3">
                  <img src={logo} alt="logo" />
                  <span className="fw-normal">iPhone 14 Series</span>
                </div>

                <h1>Up to 10% Off Voucher</h1>

                <button className="btn text-white position-relative border-0">
                  Shop Now{' '}
                  <hr className=" border border-white position-absolute top-50" />
                  <FaArrowRight strokeWidth={0.5} className="ms-2" />
                </button>
              </div>

              <div className="col">
                <img src={apple} className="img-fluid" alt="apple" />
              </div>
              <div className="position-absolute point">
                {Array.from({ length: 5 }).map((el, i) => (
                  <span
                    key={i}
                    className={i === 2 ? 'span-rounded ' : 'span-round'}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
