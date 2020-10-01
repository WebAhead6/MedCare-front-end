import React from "react";
import "./patientDetails.css";
import Logo from "../component/logo";
import { BsPersonFill } from "react-icons/bs";
import getUserData from "../utlis/getPatientData";

const Detials = function () {
  const nameCapitalized = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const [patientData, setPatientData] = React.useState(null);
  React.useEffect(() => {
    const id = localStorage.getItem("patientId");
    getUserData(`/profile/${id}`)
      .then((data) => {
        setPatientData(data);
      })
      .catch(() => {});
  }, []);
  if (!patientData) {
    return <h3>...Loading</h3>;
  }
  const { first_name, last_name, birthdate, phone_number } = patientData.data;
  const calculate_age = (date) => {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  return (
    <main>
      <Logo />
      <div>
        <h1>Hello {nameCapitalized(first_name)}</h1>
      </div>
      <div className="profiledetails">My Profile Details</div>
      <div className="personalinfo">
        <span className="profileicon">
          <BsPersonFill />
        </span>
        Patient Name: <span>{last_name}</span>
        <span> {first_name}</span> <br></br> Age: {calculate_age(birthdate)}
        <br></br> phone number:
        {phone_number}
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
