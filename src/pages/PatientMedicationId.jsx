import React from "react";
import Logo from "../component/logo";
import "./PatientMedicationId.css";
import { useHistory } from "react-router-dom";

const MedicationDetailsId = function () {
  return (
    <div className="card">
      <p>{new Date().toDateString()}</p>
      <Logo />
      <div className="med-image">
        <img className="med-pills" src="/Ritalin tablets-550x550.png" />
        <img
          className="med-pills"
          style={{ borderRadius: "30px" }}
          src="/adderall.jpg"
        />
      </div>
      <div className="description">
        <p>Uses: hyperactivity disorder ADHD. </p>
        <p>30mg</p>
        <p>3 times a day </p>
        <p> ends date :6/11/2020</p>
        ends date :6/11/2020
      </div>
    </div>
  );
};

export default MedicationDetailsId;
