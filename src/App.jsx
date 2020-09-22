import React from "react";

import "./App.css";
import Home from "./pages/home";
import PatientDetials from "./pages/PatientDetails";
import PatientMedication from "./pages/PatientMedications";
import MedicationDetailsId from "./pages/PatientMedicationId";
import PatientReport from "./pages/PatientReport";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Askadoc from "./pages/Askadoc";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/patient/details">
            <PatientDetials />
          </Route>
          <Route path="/patient/medications" exact>
            <PatientMedication />
          </Route>
          <Route path="/patient/medications/id">
            <MedicationDetailsId />
          </Route>
          <Route path="/patient/report">
            <PatientReport />
          </Route>
          <Route path="/patient/askadoc">
            <Askadoc />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
