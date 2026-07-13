import "./footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  IoSendOutline
} from "react-icons/io5";

import qr from "../assets/images/qr-code.png";
import playStore from "../assets/images/google-play.png";
import appStore from "../assets/images/app-store.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row gy-5">

          {/* Exclusive */}

          <div className="col-lg-3 col-md-6">

            <h3 className="footer-logo">
              Exclusive
            </h3>

            <h5>Subscribe</h5>

            <p>Get 10% off your first order</p>

            <div className="subscribe-box">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                <IoSendOutline />
              </button>

            </div>

          </div>

          {/* Support */}

          <div className="col-lg-2 col-md-6">

            <h5>Support</h5>

            <ul>

              <li>111 Bijoy Sarani, Dhaka, Bangladesh.</li>

              <li>exclusive@gmail.com</li>

              <li>+88015-88888-9999</li>

            </ul>

          </div>

          {/* Account */}

          <div className="col-lg-2 col-md-6">

            <h5>Account</h5>

            <ul>

              <li>My Account</li>

              <li>Login / Register</li>

              <li>Cart</li>

              <li>Wishlist</li>

              <li>Shop</li>

            </ul>

          </div>

          {/* Quick Link */}

          <div className="col-lg-2 col-md-6">

            <h5>Quick Link</h5>

            <ul>

              <li>Privacy Policy</li>

              <li>Terms Of Use</li>

              <li>FAQ</li>

              <li>Contact</li>

            </ul>

          </div>

          {/* Download */}

          <div className="col-lg-3 col-md-6">

            <h5>Download App</h5>

            <p className="download-text">
              Save $3 with App New User Only
            </p>

            <div className="download-app">

              <img src={qr} alt="QR Code" />

              <div className="stores">

                <img src={playStore} alt="Google Play" />

                <img src={appStore} alt="App Store" />

              </div>

            </div>

            <div className="social-icons">

              <FaFacebookF />

              <FaTwitter />

              <FaInstagram />

              <FaLinkedinIn />

            </div>

          </div>

        </div>

      </div>

      <div className="copyright">

        © Copyright Rimel 2022. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;