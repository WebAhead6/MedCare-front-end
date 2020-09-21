import React from "react";
import "./patientDetails.css";
import Logo from "../component/logo";
import { BsPersonFill } from "react-icons/bs";

const Detials = function () {
  return (
    <main>
      <Logo />
      <div>
        <h1>Hello User!</h1>
      </div>
      <div className="profiledetails">My Profile Details</div>
      <div className="personalinfo">
        <span className="profileicon">
          <BsPersonFill />
        </span>
        Patient Name: Abeer <br></br> Age:57 yo<br></br> phone number: 123456789
      </div>
      <div className="container">
        <button className="medicationlist">
          Medications List
          <img className="medicon" src="/medicon.svg"></img>
        </button>
        <button className="askdoc">
          Ask a Doctor <img className="docicon" src="/docicon.svg"></img>
        </button>
      </div>
      <button className="medreport">
        Medical Report <img className="reporticon" src="/reporticon.svg"></img>
      </button>

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
    </main>
  );
};

export default Detials;
