import React from 'react'
import Cards from '../Components/Cards'

const Home = () => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://supro.arrowtheme.com/pub/media/wysiwyg/slider/slider-full-1.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://supro.arrowtheme.com/pub/media/wysiwyg/slider/slider-full-3.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://supro.arrowtheme.com/pub/media/wysiwyg/slider/slider-full-2.jpg" alt="Third slide" />
          </div>
        </div>
      </div>
      <Cards />
    </div>
  )
}

export default Home