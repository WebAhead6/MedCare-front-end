import React from "react";
import "./askadoc.css";
import Logo from "../component/logo";

// togglePopup() {
//   this.setState({
//     showPopup: !this.state.showPopup
//   });
// }
const Askadoc = function () {
  // function PopUp() {
  //   console.log("me");
  // }

  return (
    <main>
      <Logo />
      <div>
        <h1>Hello User!</h1>
      </div>
      <div className="docques">Ask a Doctor</div>
      <div className="docquestions">
        <button className="sendbutton" onClick={() => {}}>
          I need a prescription
        </button>
        <button className="sendbutton">Make an appointment</button>
        <button className="sendbutton">I have a health issue</button>
        <button className="sendbutton">I need to conduct a test</button>
      </div>
      <div className="showPopup">
        <div className="messgaerecieved message">
          <div className="close">+</div>
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
