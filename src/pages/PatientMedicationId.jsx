import React from "react";
import Logo from "../component/logo";
import "./PatientMedicationId.css";
import getUserData from "../utlis/getPatientData";
import postPatientData from "../utlis/postPatientData";
import { useHistory } from "react-router-dom";

const MedicationDetailsId = function () {
  const history = useHistory();
  const [medDetails, setmedDetails] = React.useState({});
  const [pillLeft, setPillLeft] = React.useState(new Array(0).fill(""));
  const [error, setError] = React.useState(false);
  const patient_id = localStorage.getItem("patientId");
  React.useEffect(() => {
    const id = localStorage.getItem("medicationId");
    getUserData(`/medicationsList/${patient_id}/${id}`)
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

  const decrementPillsNum = () => {
    const id = localStorage.getItem("medicationId");

    console.log(id);
    postPatientData(`/pills/remove/${patient_id}/${id}`, {
      pills_num: pills_num,
    }).then((data) => {
      if (data.code === 200 && data.data.rowCount > 0) {
        if (pills_num != 0) {
          setmedDetails({ ...medDetails, pills_num: pills_num - 1 });
          setPillLeft(pillLeft.filter((_, i) => i !== 0));
        } else {
          return setError(true);
        }
      }
    });
  };

  const handleClick = () => {
    console.log("anan");
    const id = localStorage.getItem("medicationId");
    const patient_id = localStorage.getItem("patientId");
    getUserData(`/mediRemove/${patient_id}/${id}`)
      .then((data) => {
        console.log(data);
        history.push("/patient/askadoc");
      })
      .catch(console.error);
  };
  if (error) {
    return <h2>Error</h2>;
  }

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
            <span>Usage: </span>
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

          <button onClick={decrementPillsNum}>I took the pill</button>
        </div>
      ) : (
        <div>
          {" "}
          <p className="message">The pills are over,to refill press here</p>
          <button onClick={handleClick} className="style-button">
            refill
          </button>
        </div>
      )}
    </div>
  );
};

export default MedicationDetailsId;
