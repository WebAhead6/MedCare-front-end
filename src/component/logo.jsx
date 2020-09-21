import React from "react";
import "../App.css";
const Logo = function () {
  return (
    <div className="logo">
      <img src="/medicine.png" />
      <div>
        <span className="logo-name-med">Med</span>
        <span className="log-name-care">Care</span>
      </div>
    </div>
  );
};

export default Logo;
