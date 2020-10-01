import React from "react";
import "./home.css";
import { BsPersonFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Logo from "../component/logo";
import postPatientData from "../utlis/postPatientData";

const Home = function () {
  const [patientDetails, setPatientDetails] = React.useState({
    identityNumber: "",
    identityNumberError: "",
    password: "",
    passwordError: "",
  });
  const [patientData, setUpatientData] = React.useState({});
  const history = useHistory();

  //validation
  const validate = () => {
    let isError = false;
    const errors = {
      identityNumberError: "",
      passwordError: "",
    };

    console.log(typeof +patientDetails.identityNumber);
    console.log(+patientDetails.identityNumber);
    if (!patientDetails.identityNumber) {
      isError = true;
      errors.identityNumberError = "please enter your identify number";
    } else if (!/^\d+$/.test(patientDetails.identityNumber)) {
      isError = true;
      errors.identityNumberError = "Only numbers";
    } else if (!patientDetails.password) {
      isError = true;
      errors.passwordError = "please enter your password";
    }

    setPatientDetails({
      ...patientDetails,
      ...errors,
    });

    return isError;
  };

  const handleClick = () => {
    const err = validate();
    if (!err) {
      if (
        patientDetails.identityNumber == "398765432" &&
        patientDetails.password == "mario"
      )
        history.push("/doctor/patientList");
      postPatientData(`/patient/login`, patientDetails)
        .then((data) => {
          setUpatientData(data);
          if (data.message === "Logged successfully") {
            localStorage.setItem("patientId", data.data_id);
            history.push("/patient/details");
          }
        })
        .catch(() => {});
    }
  };

  if (!patientDetails) {
    return <h3>...Loading</h3>;
  }
  const { message } = patientData;

  return (
    <div className="main-card">
      <Logo />

      <p className="sign-in">Sign In</p>
      <div className="input-container">
        <input
          placeholder="Identity Number"
          type="text"
          name="Identity Number"
          errorText={patientDetails.identityNumberError}
          value={patientDetails.identityNumber}
          onChange={(e) =>
            setPatientDetails({
              ...patientDetails,
              identityNumber: e.target.value,
            })
          }
        />
        {patientDetails.identityNumberError && (
          <p className="error">{patientDetails.identityNumberError}</p>
        )}
        <span className="icon">
          <BsPersonFill />
        </span>
      </div>
      <div className="input-container">
        <input
          placeholder="password"
          type="password"
          name="password"
          value={patientDetails.password}
          onChange={(e) =>
            setPatientDetails({ ...patientDetails, password: e.target.value })
          }
        />
        {patientDetails.passwordError && (
          <p className="error">{patientDetails.passwordError}</p>
        )}

        <span className="icon">
          <FaKey />
        </span>
      </div>
      <button onClick={handleClick} className="style-button">
        login
      </button>
      <div className="message">{message}</div>
    </div>
  );
};

export default Home;
