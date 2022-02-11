import React from "react";
import "../App.css";
import "./HomeTopClubsSection.css"


function HomeTopClubsSection() {
    return(
        <div className="homesection-container">
            <div className="homesection-title row">
                <h3>OUR FEATURED CLUBS</h3>
            </div>
            <div class="homesection-card-container row">
            
            {/* 3 columns, one for each club 1 row */}
                <div className="homesection-card col-lg-4">
                {/* Each club has a card, title and image */}
                    <h4>Basement 45</h4>

                </div>
                <div className="homesection-card col-lg-4">
                {/* Each club has a card, title and image */}
                    <h4>Basement 45</h4>

                </div>
                <div className="homesection-card col-lg-4">
                {/* Each club has a card, title and image */}
                    <h4>Basement 45</h4>

                </div>
            </div>
            


        </div>



    );


}

export default HomeTopClubsSection;