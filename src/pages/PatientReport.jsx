import React from "react";
import Logo from "../component/logo";
import "./PatientReport.css";
import getPatientData from "../utlis/getPatientData";

const PatientReport = function () {
  const [medicalReport, setMedicalResport] = React.useState();
  React.useEffect(() => {
    const id = localStorage.getItem("patientId");
    getPatientData(`/profile/${id}`)
      .then((data) => {
        setMedicalResport(data);
      })
      .catch(() => {});
  }, []);
  if (!medicalReport) {
    return <h3>...Loading</h3>;
  }
  const { medical_report, first_name } = medicalReport.data;
  return (
    <div className="main-card">
      <Logo />
      <h1>Hello {first_name} </h1>
      <div className="profiledetails"> My Medical Report</div>
      <p className="report">{medical_report}</p>
    </div>
  );
};

export default PatientReport;
