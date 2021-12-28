import React from "react";
import "../App.css";
import "./HomeTopClubsSection.css"


function HomeTopClubsSection() {
    return(
        <div className="homesection-container">
            <div className="homesection-title row pb-1">
                <h3>A PEEK INTO THE CHARLIE'S UNDERGROUND</h3>
            </div>
            <div class="homesection-card-container row pb-1">
            
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