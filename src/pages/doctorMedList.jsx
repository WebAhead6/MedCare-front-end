import React from "react";
import Logo from "../component/logo";
import "./PatientMedications.css";
import { useHistory } from "react-router-dom";
import getPatientData from "../utlis/getPatientData";

const PatientMedication = function () {
  const addMedBtn = {
    border: " 5px solid #5ca2fa",
    borderRadius: "10px",
    padding: "12px",
    color: "#5ca2fa",
    backgroundColor: "#eeeeee",
    width: "60%",
    marginTop: "110px",
    fontSize: "20px",
  };
  const history = useHistory();
  const handleClick = (medId) => {
    history.push("/doctor/addMed");
  };

  const [patientMedData, setPatientMedData] = React.useState(null);
  React.useEffect(() => {
    const id = localStorage.getItem("patinet_id");
    getPatientData(`/medicationsList/${id}`)
      .then((data) => {
        console.log(data);
        setPatientMedData(data);
      })
      .catch(() => {});
  }, []);
  if (!patientMedData) {
    return <h3>...Loading</h3>;
  }

  return (
    <div className="main-card">
      <Logo />
      <div className="title">
        <p>Medications List</p>
        <img className="drug-icon" src="/drug.svg" />
      </div>
      <table className="Medications-List">
        <thead>
          <tr>
            <th>Medication name</th>
            <th>pills left</th>
          </tr>
        </thead>
        <tbody>
          {patientMedData.data.map(({ medication_name, pills_num, id }) => (
            <tr key={id} onClick={() => handleClick(id)}>
              <td>{medication_name}</td>
              <td>{pills_num}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={addMedBtn} onClick={handleClick}>
        add medication
      </button>
    </div>
  );
};

export default PatientMedication;
