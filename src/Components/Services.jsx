import './services.css'

import { TbTruckDelivery, TbHeadset } from 'react-icons/tb'

import { RiSecurePaymentLine } from 'react-icons/ri'

function Services() {
  return (
    <section className="services py-5">
      <div className="container">
        <div className="row justify-content-center">
          {/* Delivery */}

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
              <div className="service-icon">
                <TbTruckDelivery />
              </div>

              <h5>FREE AND FAST DELIVERY</h5>

              <p>Free delivery for all orders over $140</p>
            </div>
          </div>

          {/* Customer Service */}

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
              <div className="service-icon">
                <TbHeadset />
              </div>

              <h5>24/7 CUSTOMER SERVICE</h5>

              <p>Friendly 24/7 customer support</p>
            </div>
          </div>

          {/* Money Back */}

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
              <div className="service-icon">
                <RiSecurePaymentLine />
              </div>

              <h5>MONEY BACK GUARANTEE</h5>

              <p>We return money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
