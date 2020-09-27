import React from "react";
import Logo from "../component/logo";
import "./PatientMedicationId.css";
import getPatientData from "../utlis/getPatientData";

const MedicationDetailsId = function () {
  const [medDetails, setmedDetails] = React.useState({});
  const [pillLeft, setPillLeft] = React.useState(new Array(0).fill(""));

  React.useEffect(() => {
    const id = localStorage.getItem("medicationId");
    getPatientData(`/medicationsList/1/${id}`)
      .then((data) => {
        setmedDetails(data.data);
        setPillLeft(new Array(data.data.pills_num).fill(""));
      })
      .catch(() => {});
  }, []);

  if (!medDetails) {
    return <h3>...Loading</h3>;
  }
  const {
    medication_name,
    medication_usage,
    imprint,
    end_date,
    pills_num,
    pills_image,
    medication_image,
  } = medDetails;

  const handleClick = () => {
    setmedDetails({ ...medDetails, pills_num: pills_num - 1 });
    setPillLeft(pillLeft.filter((_, i) => i !== 0));
  };
  return (
    <div className="main-card">
      <Logo />
      <div className="med-image">
        <img className="med-pills" src={medication_image} />
        <img
          className="med-pills"
          style={{ borderRadius: "30px" }}
          src={pills_image}
        />
      </div>
      <div className="details">
        <div className="description">
          <p>
            <span>Name: </span>
            {medication_name}{" "}
          </p>
          <p>
            <span>Uses: </span>
            {medication_usage}{" "}
          </p>
          <p>
            <span>Imprint: </span>
            {imprint}
          </p>

          <p>
            <span>End date: </span>
            {end_date}
          </p>
        </div>
        {pills_num > 5 ? (
          <div className="amount">{pills_num}</div>
        ) : (
          <div className="smallAmount">{pills_num}</div>
        )}
      </div>
      {pills_num !== 0 ? (
        <div>
          <div className="pillLeft">
            {pillLeft.map((value, index) => (
              <div key={index}>
                <img src="/medicine-cartoon-png-favpng-ryLDmwNjBtPxGGEFX8ResUD0y.jpg" />
              </div>
            ))}
          </div>
          <button className="style-button" onClick={handleClick}>
            I took the pill
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <p className="message">The pills are over,to refill press here</p>
          <a href="/patient/details">
            <button className="style-button">refill</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default MedicationDetailsId;
