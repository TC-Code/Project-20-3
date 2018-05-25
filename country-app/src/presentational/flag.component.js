import React from "react";
import "../country.css";

const CountryFlag = props => (
  <div className="country-logo-wrapper">
    <h1>{props.country.name}</h1>
    <img
      className="country-logo"
      src={props.country.imageUrl}
      alt="country photo"
    />
  </div>
);

export default CountryFlag;
