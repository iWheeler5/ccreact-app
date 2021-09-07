import React, { useState, useEffect } from "react";
import ClubCultureDataService from "../../services/clubculture";
import { Link } from "react-router-dom";
import { Button } from "../Button";
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
    setSearchName("");
    setSearchPostcode("");
    setSearchCity("");
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
    if (searchCity === "All Cities") {
      refreshList();
    } else {
      find(searchCity, "city");
    }
  };

  return (
    <div className="clubs-list">
      <div className="row pb-1">
        <div className="input-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            {/* <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--small' onClick={findByName} type="button">Search
            </Button> */}
            <button
              className="btn btn--outline btn--search"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Postcode"
            value={searchPostcode}
            onChange={onChangeSearchPostcode}
          />
          <div className="input-group-append">
            {/* <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--small' onClick={findByName} type="button">Search
            </Button> */}
            <button
              className="btn btn--outline btn--search"
              type="button"
              onClick={findByPostcode}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4">
          <select onChange={onChangeSearchCity}>
            {cities.map((city) => {
              return <option value={city}> {city.substr(0, 20)}</option>;
            })}
          </select>
          <div className="input-group-append">
            <button
              className="btn btn--outline btn--search"
              type="button"
              onClick={findByCity}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row pb-1">
        <div className="input-group col-lg-4">
          <button
            className="btn btn--outline btn--large btn--clearresults"
            type="button"
            onClick={refreshList}
          >
            Clear Search Results
          </button>
        </div>
      </div>
      <div className="row">
        {clubs.map((club) => {
          const address = `${club.address.addressline1} ${club.address.city} ${club.address.postcode}`;
          const city = `${club.address.city}`;
          return (
            <div className="col-lg-7 pb-1 club-list-container">
              <div className="card club-list-card">
                <div className="card-body">
                  <h5 className="card-title club-card-title">{club.name}</h5>
                  {/* <p className="card-text">
                    <strong>{club.city}</strong>
                  </p> */}
                  <p className="card-text">
                    {city}
                    <br />
                    <br />
                    <div className="row">
                      <br />
                      <Link
                        to={"/clubs/" + club._id}
                        className="btn btn--primary btn-club-fromlist"
                      >
                        View Club
                      </Link>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClubsList;
