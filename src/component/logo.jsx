import React from "react";
import "./logo.css";
import "../pages/home.css";
const Logo = function () {
  const arr = [
    "/patient/medications/id",
    "/patient/details",
    "/patient/report",
    // "/doctor/register",
  ];
  const searchRoute = () => {
    let bool = false;
    arr.forEach((route) => {
      if (window.location.pathname === route) bool = true;
    });
    return bool;
  };
  return (
    <div className={searchRoute() ? "smallLogo" : "logo"}>
      <div className="img-name">
        <img src="/medicine.png" />
        <div>
          <span className="logo-name-med">Med</span>
          <span className="log-name-care">Care</span>
        </div>
      </div>
      {searchRoute() ? <p className="date">{new Date().toDateString()}</p> : ""}
    </div>
  );
};

export default Logo;
