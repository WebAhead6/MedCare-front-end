import React from "react";
import Logo from "../component/logo";
import "./PatientMedicationId.css";
import { useHistory } from "react-router-dom";

const MedicationDetailsId = function () {
  const [medDetails, setmedDetails] = React.useState({
    Uses: "hyperactivity disorder ADHD",
    imprint: "30mg",
    medicationtake: "3 times a day",
    endsDate: "6/11/2020",
    amount: 30,
    pills_image: "/adderall.jpg",
    medication_image: "/Ritalin tablets-550x550.png",
  });
  const [pillLeft, setPillLeft] = React.useState(
    new Array(medDetails.amount).fill("")
  );

  const handleClick = () => {
    setmedDetails({ ...medDetails, amount: medDetails.amount - 1 });
    setPillLeft(pillLeft.filter((_, i) => i !== 0));
  };
  return (
    <div className="card">
      <Logo />
      <div className="med-image">
        <img className="med-pills" src={medDetails.medication_image} />
        <img
          className="med-pills"
          style={{ borderRadius: "30px" }}
          src={medDetails.pills_image}
        />
      </div>
      <div className="details">
        <div className="description">
          <p>
            <span>Uses: </span>
            {medDetails.Uses}{" "}
          </p>
          <p>
            <span>Imprint: </span>
            {medDetails.imprint}
          </p>
          <p>
            <span>Daily usage: </span>
            {medDetails.medicationtake}
          </p>
          <p>
            <span>End date: </span>
            {medDetails.endsDate}
          </p>
        </div>
        {medDetails.amount > 5 ? (
          <div className="amount">{medDetails.amount}</div>
        ) : (
          <div className="smallAmount">{medDetails.amount}</div>
        )}
      </div>
      {medDetails.amount !== 0 ? (
        <div>
          <div className="pillLeft">
            {pillLeft.map((value, index) => (
              <div key={index}>
                <img src={medDetails.pills_image} />
              </div>
            ))}
          </div>
          <button onClick={handleClick}>I took the pill</button>
        </div>
      ) : (
        <div>
          {" "}
          <p className="message">The pills are over,to refill press here</p>
          <a href="/patient/details">
            <button>refill</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default MedicationDetailsId;
