import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Cities() {
  const [cities, setCities] = useState([]);
  const [citiesBack, setCitiesBack] = useState(null);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = () => {
    axios.get("http://worldtimeapi.org/api/timezone").then((response) => {
      //console.log(response.data);
      setCities(response.data);
    });
  };

  const filterCity = (e) => {
    var cityQuery = e.target.value;

    setCitiesBack((allCities) => {
      return cities.filter((s) => {
        return s.toLowerCase().includes(cityQuery.toLowerCase());
      });
    });
  };
  return (
    <div>
      <div className="row container">
        <form className="col l12 m12 s12">
          <div className="input-field col s12">
            <input
              id="city"
              className="input-field"
              type="text"
              onChange={filterCity}
            ></input>
            <label htmlFor="city" className="deep-orange-text">
              Şehir Ara
            </label>
          </div>
        </form>
      </div>
      <div className="row">
        {citiesBack != null
          ? citiesBack.map((city) => (
              <Link key={city} to={`${city}`}>
                <div className=" col l3 m4 s6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">{city}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : cities.map((city) => (
              <Link key={city} to={`${city}`}>
                <div className=" col l3 m4 s6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">{city}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
