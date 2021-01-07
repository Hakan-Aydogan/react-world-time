import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

export function Clocks({ match }) {
  const [dateTime, setDateTime] = useState("");
  const [week, setWeek] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    getTime();
    console.log("2", dateTime);
  }, []);

  const getTime = () => {
    axios
      .get(
        `http://worldtimeapi.org/api/timezone/${match.params.continent}/${match.params.region}`
      )
      .then((response) => {
        setDateTime(response.data.datetime);
        setWeek(response.data.week_number);
        setDay(response.data.day_of_year);
      });
  };
  return (
    <div className="container">
      <div className="card">
        <Link
          to="/"
          className="btn-floating left halfway-fab waves-light waves-effect deep-orange"
        >
          <i className="material-icons">undo</i>
        </Link>
        <div className="card-content">
          <h4 className="center deep-orange-text">{match.params.region}</h4>
          <h1 className="center blue-grey-text">
            {moment(dateTime).format("MMMM Do YYYY, h:mm:ss a")}
          </h1>
          <h4 className="center brown-text">{day + "'th day of year"}</h4>
          <h4 className="center brown-text">{week + "'th week of year"}</h4>
        </div>
      </div>
    </div>
  );
}
