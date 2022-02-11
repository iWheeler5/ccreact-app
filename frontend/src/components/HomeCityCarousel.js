import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../App.css";
import "./HomeCityCarousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function HomeCityCarousel() {
    return (
        <div class="homesection-container">
            <div className="homesection-title row">
                <h3>OUR FEATURED CLUBS</h3>
            </div>
            <div class="carousel-wrapper home-city-carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows centerMode={true} centerSlidePercentage={33.3}>
                    <div class="carousel-tile">
                        <h4>TEST CAROUSEL ITEM 1</h4>
                    </div>
                    <div class="carousel-tile">
                        <h4>TEST CAROUSEL ITEM 2</h4>
                    </div>
                    <div class="carousel-tile">
                        <h4>TEST CAROUSEL ITEM 3</h4>
                    </div>
                </Carousel>
            </div>
        </div>
        
    )


}