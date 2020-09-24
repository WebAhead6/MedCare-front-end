import React from "react";
import Logo from "../component/logo";
import "./PatientMedications.css";
import { useHistory } from "react-router-dom";
import getPatientData from "../utlis/getPatientData";

const PatientMedication = function () {
  const history = useHistory();
  const handleClick = (medId) => {
    localStorage.setItem("medicationId", medId);
    history.push("/patient/medications/id");
  };

  const [patientMedData, setPatientMedData] = React.useState(null);
  React.useEffect(() => {
    getPatientData(`http://localhost:5000/medicationsList/1`)
      .then((data) => {
        setPatientMedData(data);
      })
      .catch(() => {});
  }, []);
  if (!patientMedData) {
    return <h3>...Loading</h3>;
  }

  return (
    <div className="card">
      <Logo />
      <div className="title">
        <p>Medications List</p>
        <img className="drug-icon" src="/drug.svg" />
      </div>
      <table className="Medications-List">
        <thead>
          <tr>
            <th>Medication name</th>
            <th>Medication image</th>
            <th>Medication Usage</th>
          </tr>
        </thead>
        <tbody>
          {patientMedData.data.map(
            ({ medication_name, pills_image, treatment, id }) => (
              <tr key={id} onClick={() => handleClick(id)}>
                <td>{medication_name}</td>
                <td>
                  <img className="pill-image" src={pills_image} />
                </td>
                <td> {treatment} </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientMedication;
