import React from "react";
import "./askadoc.css";
import Logo from "../component/logo";
import postPatientData from "../utlis/postPatientData";

const Askadoc = function () {
  function PopUp() {
    setShowPopUp(!showpopup);
  }

  const handleClick = (message) => {
    PopUp();
    sendMessage(message);
  };
  const sendMessage = (message) => {
    console.log(message);
    const id = localStorage.getItem("patientId");
    postPatientData(`/patient/ques`, { message, id })
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  };

  const [showpopup, setShowPopUp] = React.useState(false);
  return (
    <main>
      <Logo />
      <div>
        <h1>Hello User!</h1>
      </div>
      <div className="docques">Ask a Doctor</div>
      <div className="docquestions">
        <button
          className="sendbutton"
          onClick={() => handleClick("I need a prescription")}
        >
          I need a prescription
        </button>
        <button
          className="sendbutton"
          onClick={() => handleClick("Make an appointment")}
        >
          Make an appointment
        </button>
        <button
          className="sendbutton"
          onClick={() => handleClick("I have a health issue")}
        >
          I have a health issue
        </button>
        <button
          className="sendbutton"
          onClick={() => handleClick("I need to conduct a test")}
        >
          I need to conduct a test
        </button>
      </div>
      <div
        className="showPopup"
        style={{ display: showpopup ? "flex" : "none" }}
      >
        <div className="messgaerecieved message">
          <div className="close" onClick={PopUp}>
            +
          </div>
          <img className="thumbup" src="/thumb-up.svg"></img>
          your request was sent to your doctor, check later for response{" "}
        </div>
      </div>
      <div className="bottomnav">
        <a href="/patient/details">
          <img className="homeicon" src="/homeicon.svg"></img>
        </a>
        <a href="/patient/medications">
          <img className="capsule" src="/capsule.svg"></img>
        </a>
        <a href="/">
          {" "}
          <img className="logout" src="/logouticon.svg"></img>
        </a>
      </div>
    </main>
  );
};

export default Askadoc;
