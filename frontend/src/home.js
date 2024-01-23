// Home.js

import React from 'react';
import img3 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img1 from "../images/img3.png";

const Home = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-md-12">
          <h1 className="py-1 text-center text-white" style={{
            fontSize: "60px",
            textShadow: "4px 4px 4px #006AEC", 
          }}>Search for the Best Rated Products</h1>
          <div className='text-center'>
            <input id="searchInput" className="input px-5 py-2 my-5 input-box rounded" type="text" placeholder="Search here..." />
            <i className="bi bi-search search-icon "></i>
            <button id="searchButton" className="btn mx-5 text-white" style={{ backgroundColor: '#006AEC' }}>Search</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              {/* Carousel Item 1 */}
              <div className="carousel-item active">
                <img src={img3} className="d-block w-100 img-fluid" alt="First Carousel Item" />
                <div className="carousel-caption d-flex align-items-center">
                  <div className='caresoul-bg'>
                    <h3 className=' caresoul-heading'>What We Do</h3>
                    <p className='caresoul-para'>We provide a one-stop solution to find the best-rated products across various e-commerce websites. Our platform helps you make informed decisions and discover top-quality products.</p>
                  </div>
                </div>
              </div>

              {/* Carousel Item 2 */}
              <div className="carousel-item">
                <img src={img2} className="d-block w-100 img-fluid" alt="Second Carousel Item" />
                <div className="carousel-caption d-flex align-items-center">
                  <div className='caresoul-bg'>
                    <h3 className='caresoul-heading'>How It Works</h3>
                    <p className='caresoul-para'>Our platform uses advanced web scraping techniques to gather information about products from different e-commerce sites. Simply enter your search query, and we'll present you with the best options available.</p>
                  </div>
                </div>
              </div>

              {/* Carousel Item 3 */}
              <div className="carousel-item">
                <img src={img1} className="d-block w-100 img-fluid" alt="Third Carousel Item" />
                <div className="carousel-caption d-flex flex-column align-items-center">
                  <div className='caresoul-bg'>
                    <h3 className='caresoul-heading'>Why Choose Us</h3>
                    <p className='caresoul-para'>With our comprehensive search and rating system, you can trust that you're getting recommendations based on genuine user reviews. Save time and make smarter purchasing decisions with our platform.</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
