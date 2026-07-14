import React from 'react'
import { FaRegHeart} from 'react-icons/fa'
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import './header.css'

export const Header = () => {
  return (
    <>
      <div className="top-bar text-center text-white py-2 bg-dark">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
      </div>

      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container pt-4">
          <a className="navbar-brand fw-bold fs-2" href="#">
            Eco-Mart
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mx-auto fw-normal gap-3">
              <li className="nav-item position-relative">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3 gap-sm-4">
              <div className="search-box d-flex justify-content-center align-items-center gap-4">
                <input
                  type="text"
                  name="search"
                  placeholder="What are you looking for?"
                  className="search-input "
                />
                <IoSearchOutline className="icon"/>
              </div>

              <FaRegHeart className="icon"/>

              <HiOutlineShoppingCart className="icon"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
