import React from "react";
import "./register.css";
import postPatientData from "../utlis/postPatientData";
import Logo from "../component/logo";
import DatePiker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Register = function () {
  const [patientDetails, setPatientDetails] = React.useState({
    firstName: "",
    lastName: "",
    identityNumber: "",
    birthDate: "",
    password: "",
    phoneNumber: "",
  });

  const [patientData, setPatientData] = React.useState({});
  const handleClick = () => {
    postPatientData(`/doctor/register`, patientDetails)
      .then((data) => {
        console.log(data);
        setPatientData(data);
      })
      .catch(console.error);
  };
  const { message } = patientData;
  return (
    <div className="main-card">
      <Logo />

      <p className="register"></p>
      <div className="input-container">
        <input
          placeholder="First Name"
          type="text"
          name="First Name"
          value={patientDetails.firstName}
          onChange={(e) =>
            setPatientDetails({ ...patientDetails, firstName: e.target.value })
          }
        />
        <input
          placeholder="Last Name"
          type="text"
          name="Last Name"
          value={patientDetails.lastName}
          onChange={(e) =>
            setPatientDetails({ ...patientDetails, lastName: e.target.value })
          }
        />
        <input
          placeholder="Identity Number"
          type="text"
          name="Identity Number"
          value={patientDetails.identityNumber}
          onChange={(e) =>
            setPatientDetails({
              ...patientDetails,
              identityNumber: e.target.value,
            })
          }
        />
        <input
          placeholder="password"
          type="password"
          name=" password"
          value={patientDetails.password}
          onChange={(e) =>
            setPatientDetails({ ...patientDetails, password: e.target.value })
          }
        />

        <DatePiker
          selected={patientDetails.birthDate}
          onChange={(date) =>
            setPatientDetails({
              ...patientDetails,
              birthDate: date,
            })
          }
          placeholderText="Birth date"
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          scrollableYearDropdown
        />

        <div className="input-container">
          <input
            placeholder="Phone number"
            type="number"
            name="phone number"
            value={patientDetails.phoneNumber}
            onChange={(e) =>
              setPatientDetails({
                ...patientDetails,
                phoneNumber: e.target.value,
              })
            }
          />
        </div>

        <button className="style-button" onClick={handleClick}>
          add patient
        </button>
        <div className="login-message">{message}</div>
      </div>
    </div>
  );
};

export default Register;
