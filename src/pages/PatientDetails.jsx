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
        <a href="/patient/medications">
          <button className="medicationlist">
            Medications List
            <img className="medicon" src="/medicon.svg"></img>
          </button>
        </a>
        <a href="/patient/askadoc">
          <button className="askdoc">
            Ask a Doctor <img className="docicon" src="/docicon.svg"></img>
          </button>
        </a>
      </div>
      <a href="/patient/report">
        <button className="medreport">
          Medical Report{" "}
          <img className="reporticon" src="/reporticon.svg"></img>
        </button>
      </a>
    </main>
  );
};

export default Detials;
