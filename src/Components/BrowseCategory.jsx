import './browseCategory.css'
import {categories} from '../data/categories.js'
import LeftArrow from '../assets/images/Left Arrow.png'
import RightArrow from '../assets/images/Right Arrow.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

function BrowseCategory() {
  return (
    <section className="browse-category py-5">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-5">
          <div className='section-small'>
             <small>
                <span></span>Categories
              </small>

            <h2 className="fw-semibold mt-2">Browse By Category</h2>
          </div>

          <div className="d-flex gap-2 d-sm-flex d-none">
            <button className="arrow-btn">
                 <img src={LeftArrow} alt='LeftArrow'/>  
            </button>

            <button className="arrow-btn">
               <img src={RightArrow} alt='RightArrow'/>  
            </button>
          </div>
        </div>


        <div className="row">
          {categories.map((item) => {
            const Icon = item.icon

            return (
              <div className="col-lg-2 col-md-4 col-6 mb-4" key={item.id}>
                <div className="category-card">
                  <Icon className="category-icon" />

                  <h6>{item.title}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BrowseCategory
