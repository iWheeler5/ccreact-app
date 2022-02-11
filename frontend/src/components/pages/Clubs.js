import React, { useState, useEffect } from "react";
import ClubCultureDataService from "../../services/clubculture";

const Club = (props) => {
  const initialClubState = {
    id: null,
    name: "",
    description: "",
    cityId: "",
    capacity: "",
    coverimgurl: "",
    address: {},
    reviews: [],
  };

  const [club, setClub] = useState(initialClubState);

  const getClub = (id) => {
    ClubCultureDataService.get(id)
      .then((response) => {
        setClub(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        console.log(id);
      });
  };

  useEffect(() => {
    getClub(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div className="club-page-container">
      {club ? (
        <div className="club-page-info">
          <img
            className="club-img"
            src={club.coverimgurl}
            alt="clubImage"
          ></img>
          <h5>{club.name}</h5>
          <p>
            <strong>Description: </strong>
            {club.description}
            <br />
            <strong>Capacity: </strong>
            {club.capacity.$numberInt}
            <br />
            <strong>Address: </strong>
            {club.address.addressline1} {club.address.city}{" "}
            {club.address.postcode}
            <br />
          </p>
        </div>
      ) : (
        <div>
          <br />
          <p>No restaurant selected.</p>
        </div>
      )}
    </div>
  );
};

export default Club;
