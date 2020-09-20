import React from "react";
import "./patientDetails.css";

const Detials = function () {
  return (
    <main>
      <div>
        <h1>Hello User!</h1>
      </div>
      <div class="profiledetails">My Profile Details</div>
      <div class="medicationlist">
        Medications List
        <img src="/medicon.svg"></img>
      </div>
      <div class="askdoc">
        Ask a Doctor <img src="/docicon.svg"></img>
      </div>
      <div class="medreport">
        Medical Report <img src="/reporticon.svg"></img>
      </div>
    </main>
  );
};

export default Detials;
