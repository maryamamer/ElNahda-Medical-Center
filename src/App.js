import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import Switch from "react-switch" */
import "./App.css";
import NavBar from "./components/NavBar";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs"
import Doctors from "./components/Doctors"
import patient_portal from "./components/patient_portal"
import HomePage from "./components/Home"
import Footer from "./components/Footer"
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";
import Forget from "./components/Forget";


function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Switch>
            <Route path={"/"} exact component={HomePage} />
            <Route path={"/Home"} exact component={HomePage} />
            <Route path={"/ContactUs"} exact component={ContactUs} />
            <Route path={"/AboutUs"} exact component={AboutUs} />
            <Route path={"/Doctors"} exact component={Doctors} />
            <Route path={"/patientPortal"} exact component={patient_portal} />

            <Route path={"/ProfilePage"} exact component={ProfilePage} />
            <Route path={"/Login"} exact component={Login} />
          <Route path={"/Forget"} exact component={Forget} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
