import './musicBanner.css'
import speaker from '../assets/images/speaker-banner.png'

function MusicBanner() {
  return (
    <section className="music-banner py-5">
      <div className="container">
        <div className="banner-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="banner-category">Categories</span>

              <h2 className="banner-title">Enhance Your Music Experience</h2>

              <div className="countdown">
                <div className="time-box">
                  <h5>23</h5>
                  <span>Hours</span>
                </div>

                <div className="time-box">
                  <h5>05</h5>
                  <span>Days</span>
                </div>

                <div className="time-box">
                  <h5>59</h5>
                  <span>Minutes</span>
                </div>

                <div className="time-box">
                  <h5>35</h5>
                  <span>Seconds</span>
                </div>
              </div>

              <button className="btn-buy">Buy Now!</button>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src={speaker}
                alt="Speaker"
                className="img-fluid speaker-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MusicBanner
