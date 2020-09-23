import React from "react";
import Logo from "../component/logo";
import "./PatientReport.css";

const PatientReport = function () {
  const [medicalReport, setMedicalResport] = React.useState();
  return (
    <div className="card">
      <Logo />
      <h1>Hello User </h1>
      <div className="profiledetails"> My Medical Report</div>
      <p className="report">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto
        iure accusamus ratione numquam possimus pariatur! Veritatis, adipisci,
        placeat repellat et nobis eveniet voluptas harum labore ex sit
        laboriosam minima.
      </p>
    </div>
  );
};

export default PatientReport;
