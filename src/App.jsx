import React from "react";

import "./App.css";
import Home from "./pages/home";
import PatientDetials from "./pages/PatientDetails";
import PatientMedication from "./pages/PatientMedications";
import MedicationDetials from "./pages/PatientMedicationId";
import PatientReport from "./pages/PatientReport";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Route path="/patient/medications">
            <PatientMedication />
          </Route>
          <Route path="/patient/medications/id">
            <MedicationDetials />
          </Route>
          <Route path="/patient/report">
            <PatientReport />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
