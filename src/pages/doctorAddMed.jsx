import React from "react";
import "./register.css";
import postPatientData from "../utlis/postPatientData";
import Logo from "../component/logo";
import DatePiker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMed = function () {
  const [addMedacation, setAddMedacation] = React.useState({
    medicationName: "",
    imprint: "",
    endDate: "",
    pillNum: "",
  });

  const [patientData, setPatientData] = React.useState({});
  const handleClick = () => {
    postPatientData(`/doctor/register`, addMedacation)
      .then((data) => {
        console.log(data);
        setPatientData(data);
      })
      .catch(console.error);
  };

  return (
    <div className="main-card">
      <Logo />

      <p className="Medication"></p>
      <div className="input-container">
        <input
          placeholder="medication name"
          type="text"
          name="medication name"
          value={addMedacation.medicationName}
          onChange={(e) =>
            setAddMedacation({
              ...addMedacation,
              medicationName: e.target.value,
            })
          }
        />
        <input
          placeholder="imprint"
          type="text"
          name="imprint"
          value={addMedacation.imprint}
          onChange={(e) =>
            setAddMedacation({ ...addMedacation, imprint: e.target.value })
          }
        />
        <DatePiker
          selected={addMedacation.endDate}
          onChange={(date) =>
            setAddMedacation({
              ...addMedacation,
              endDate: date,
            })
          }
          placeholderText="ends date"
          dateFormat="dd/MM/yyyy"
        />
        <input
          placeholder="pill number"
          type="number"
          name=" pill number"
          value={addMedacation.pillNum}
          onChange={(e) =>
            setAddMedacation({ ...addMedacation, pillNum: e.target.value })
          }
        />

        <button className="style-button" onClick={handleClick}>
          add
        </button>
      </div>
    </div>
  );
};

export default AddMed;
