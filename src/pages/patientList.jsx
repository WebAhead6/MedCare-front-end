import React from "react";
import Logo from "../component/logo";
import getPatientData from "../utlis/getPatientData";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "./home.css";

const PatientMedication = function () {
  const history = useHistory();
  const handleClick = (medId) => {
    localStorage.setItem("medicationId", medId);
    history.push("/patient/medications/id");
  };

  const [patientList, setPatientList] = React.useState(null);
  React.useEffect(() => {
    getPatientData(`/doctor/PatientList/`)
      .then((data) => {
        setPatientList(data);
      })
      .catch(() => {});
  }, []);
  if (!patientList) {
    return <h3>...Loading</h3>;
  }

  return (
    <div className="main-card">
      <Logo />

      <div className="input-container">
        <span className="icon">
          <FaSearch />
        </span>
        <input placeholder="Identity Number" type="text" />
      </div>
      <div>
        <span className="icon">
          <FaPlus />
        </span>
        <a href="/doctor/register">
          <button className="add-patient">add paitent</button>
        </a>
      </div>
      <div className="title">
        <p>Patients List</p>
        <img className="drug-icon" src="/medicon.svg" />
      </div>
      <table className="Medications-List">
        <thead>
          <tr>
            <th>Patients id</th>
            <th>Patients last name</th>
            <th>Patients first name</th>
          </tr>
        </thead>
        <tbody>
          {patientList.data.map(({ first_name, last_name, id_num, id }) => (
            <tr key={id} onClick={() => handleClick(id)}>
              <td>{id_num}</td>
              <td>{last_name}</td>
              <td> {first_name} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientMedication;
