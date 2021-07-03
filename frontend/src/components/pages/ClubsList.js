import React, { useState, useEffect } from "react";
import ClubCultureDataService from "../../services/clubculture";
import { Link } from "react-router-dom";
//import '../../App.css';

const ClubsList = (props) => {
  const [clubs, setClubs] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchPostcode, setSearchPostcode] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [cities, setCities] = useState(["All Cities"]);

  useEffect(() => {
    retrieveClubs();
    retrieveCities();
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchPostcode = (e) => {
    const searchPostcode = e.target.value;
    setSearchPostcode(searchPostcode);
  };

  const onChangeSearchCity = (e) => {
    const searchCity = e.target.value;
    setSearchCity(searchCity);
  };

  const retrieveClubs = () => {
    ClubCultureDataService.getAll()
      .then((response) => {
        console.log(response.data);
        setClubs(response.data.clubs);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveCities = () => {
    ClubCultureDataService.getCities().then((response) => {
      console.log(response.data);
      setCities(["All cities"].concat(response.data));
    });
  };

  const refreshList = () => {
    retrieveClubs();
  };

  const find = (query, by) => {
    ClubCultureDataService.find(query, by)
      .then((response) => {
        console.log(response.data);
        setClubs(response.data.clubs);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name");
  };

  const findByPostcode = () => {
    find(searchPostcode, "postcode");
  };

  const findByCity = () => {
    if (searchCity == "All Cities") {
      refreshList();
    } else {
      find(searchCity, "city");
    }
  };

  return <div className="hero-container"></div>;
};

export default ClubsList;
