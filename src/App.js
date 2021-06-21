import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";

import AboutUs from "./components/AboutUs";
import Advisory from "./components/Advisory";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Symptoms from "./components/Symptoms";

import VaccineData from "./components/Vaccination/VaccineData";
import DeleteVaccine from "./components/Vaccination/DeleteVaccine";
import VaccineReg from "./components/Vaccination/VaccineReg";
import UpdateSearchVaccine from "./components/Vaccination/UpdateSearchVaccine";

import FeedbackData from "./components/Feedback/FeedbackData";
import DeleteFeedback from "./components/Feedback/DeleteFeedback";
import FeedbackReg from "./components/Feedback/FeedbackReg";
import UpdateSearchFeedback from "./components/Feedback/UpdateSearchFeedback";

import PortalData from "./components/Portal/PortalData";
import DeletePortal from "./components/Portal/DeletePortal";
import PortalReg from "./components/Portal/PortalReg";
import UpdateSearchPortal from "./components/Portal/UpdateSearchPortal";

import UpdateTest from "./components/UpdateTest";
import TestData from "./components/TestData";
import DeleteTest from "./components/DeleteTest";
import BookTest from "./components/BookTest";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        
        <Switch>
          <Route path="/BookTest" component={BookTest} />
        </Switch>
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
        <Switch>
          <Route path="/symptoms" component={Symptoms} />
        </Switch>
        <Switch>
          <Route path="/advisory" component={Advisory} />
        </Switch>
        <Switch>
          <Route path="/faq" component={Faq} />
        </Switch>
        <Switch>
          <Route path="/contactus" component={Contact} />
        </Switch>
        <Switch>
          <Route path="/AllVaccineRecords" component={VaccineData} />
        </Switch>
        <Switch>
          <Route path="/VaccineReg" component={VaccineReg} />
        </Switch>
        <Switch>
          <Route path="/DeleteVaccinationRecord" component={DeleteVaccine} />
        </Switch>       
        <Switch>
          <Route
            path="/UpdateVaccinationRecord" component={UpdateSearchVaccine} />
        </Switch>
        
        <Switch>
          <Route path="/AllFeedbackRecords" component={FeedbackData} />
        </Switch>
        <Switch>
          <Route path="/FeedbackReg" component={FeedbackReg} />
        </Switch>
        <Switch>
          <Route path="/DeleteFeedbackRecord" component={DeleteFeedback} />
        </Switch>       
        <Switch>
          <Route
            path="/UpdateFeedbackRecord" component={UpdateSearchFeedback} />
        </Switch>
        <Switch>
          <Route path="/AllPortalRecords" component={PortalData} />
        </Switch>
        <Switch>
          <Route path="/PortalReg" component={PortalReg} />
        </Switch>
        <Switch>
          <Route path="/DeletePortalRecord" component={DeletePortal} />
        </Switch>       
        <Switch>
          <Route
            path="/UpdatePortalRecord" component={UpdateSearchPortal} />
        </Switch>
        <Switch>
          <Route path="/DeleteTestEntry" component={DeleteTest} />
        </Switch>
        <Switch>
          <Route path="/AllTestRecords" component={TestData} />
        </Switch>
        <Switch>
          <Route path="/UpdateTestEntry" component={UpdateTest} />
        </Switch>
      </Router>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
