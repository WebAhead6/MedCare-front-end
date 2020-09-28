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
    password: "",
  });
  const [patientData, setUpatientData] = React.useState({});
  const history = useHistory();

  const handleClick = () => {
    postPatientData(`/patient/login`, patientDetails)
      .then((data) => {
        setUpatientData(data);
        if (data.message === "Logged successfully") {
          localStorage.setItem("patientId", data.data_id);
          history.push("/patient/details");
        }
      })
      .catch(() => {});
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
          value={patientDetails.identityNumber}
          onChange={(e) =>
            setPatientDetails({
              ...patientDetails,
              identityNumber: e.target.value,
            })
          }
        />
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
