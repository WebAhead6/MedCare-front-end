import React from "react";
import Logo from "../component/logo";
import "./PatientMedications.css";
import { useHistory } from "react-router-dom";

const PatientMedication = function () {
  const history = useHistory();
  const handleClick = () => {
    history.push("/patient/medications/id");
  };
  return (
    <div className="card">
      <Logo />
      <div className="title">
        <p>Medications List</p>
        <img className="drug-icon" src="/drug.svg" />
      </div>
      <table className="Medications-List">
        <tr>
          <th>Medication name</th>
          <th>Medication image</th>
          <th>Medication Usage</th>
        </tr>
        <tr onClick={handleClick}>
          <td>Adderall</td>
          <td>
            <img className="pill-image" src="/adderall.jpg" />
          </td>
          <td> ADHD </td>
        </tr>
        <tr>
          <td>Amitriptyline</td>
          <td>
            <img
              className="pill-image"
              src="/Screenshot from 2020-09-14 16-09-16.png"
            />
          </td>
          <td> ADHD </td>
        </tr>{" "}
        <tr>
          <td>Ativan</td>
          <td>
            <img
              className="pill-image"
              src="/Screenshot from 2020-09-14 15-47-58.png"
            />
          </td>
          <td> anxiety </td>
        </tr>
      </table>
    </div>
  );
};

export default PatientMedication;
