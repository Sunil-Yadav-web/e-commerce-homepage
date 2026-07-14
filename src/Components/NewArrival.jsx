import './newArrival.css'

import ps5 from '../assets/images/ps5.png'
import women from '../assets/images/women.png'
import speakers from '../assets/images/speakers.png'
import perfume from '../assets/images/perfume.png'

function NewArrival() {
  return (
    <section className="new-arrival py-5">
      <div className="container">
        <div className="section-heading mb-2">
          <div className="section-tag"></div>

          <span>Featured</span>
        </div>

        <h2 className="section-title mb-5">New Arrival</h2>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="arrival-card large p-5">
              <img src={ps5} alt="" />

              <div className="arrival-content">
                <h3>PlayStation 5</h3>

                <p>Black and White version of the PS5 coming out on sale.</p>

                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-12">
                <div className="arrival-card women">
                  <img src={women} alt="" />

                  <div className="arrival-content">
                    <h4>Women's Collections</h4>

                    <p>
                      Featured woman collections that give you another vibe.
                    </p>

                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="arrival-card small sec-small">
                  <img src={speakers} alt="" />

                  <div className="arrival-content">
                    <h5>Speakers</h5>

                    <p>Amazon wireless speakers</p>

                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="arrival-card small sec-small">
                  <img src={perfume} alt="" />

                  <div className="arrival-content">
                    <h5>Perfume</h5>

                    <p>GUCCI INTENSE OUD EDP</p>

                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrival
