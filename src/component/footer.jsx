import React from "react";
import "./logo.css";
import "../pages/home.css";
import { useLocation } from "react-router-dom";

const Footer = function () {
  const location = useLocation();
  const arr = ["/doctor/register", "/doctor/patientList"];

  const DoctorRoute = () => {
    let bool = false;
    arr.forEach((route) => {
      if (window.location.pathname === route) bool = true;
    });
    return bool;
  };
  if (location.pathname == "/") return "";
  return (
    <div>
      {DoctorRoute() && location.pathname !== "/" ? (
        <footer>
          <div className="bottomnav">
            <a href="/doctor/patientList">
              <img className="homeicon" src="/homeicon.svg"></img>
            </a>
            <a href="/">
              {" "}
              <img className="logout" src="/logouticon.svg"></img>
            </a>
          </div>
        </footer>
      ) : (
        <footer>
          <div className="bottomnav">
            <a href="/patient/details">
              <img className="homeicon" src="/homeicon.svg"></img>
            </a>
            <a href="/patient/medications">
              <img className="capsule" src="/capsule.svg"></img>
            </a>
            <a href="/">
              {" "}
              <img className="logout" src="/logouticon.svg"></img>
            </a>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
