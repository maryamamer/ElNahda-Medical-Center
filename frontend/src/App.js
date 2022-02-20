import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import Switch from "react-switch" */
import "./App.css";
import NavBar from "./components/NavBar";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs"
import Doctors from "./components/Doctors"
import patient_portal from "./components/patient_portal"
import HomePage from "./components/Home"
import Editpp from "./components/Editpp";
import Footer from "./components/Footer"
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";
import Forget from "./components/Forget";
import PrivateRoute from "./PrivateRoute"
import { AuthProvider } from './context/auth'
import logout from "./components/logout";
import prescription from "./components/prescription"
import appointments from './components/appointments'
import Dr_Profile from "./components/Dr_profile";
import Message from "./components/Message";

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <AuthProvider>
            <NavBar />
          </AuthProvider>

          <Switch>
            <AuthProvider>
              <Route path={"/"} exact component={Dr_Profile} />
              <Route  path={"/Home"} exact component={HomePage} />
              <Route path={"/ContactUs"} exact component={ContactUs} />
              <Route path={"/AboutUs"} exact component={AboutUs} />
              <Route path={"/Logout"} exact component={logout} />
              <Route path={"/Editpp"} exact component={Editpp} />
              <Route path={"/Doctors"} exact component={Doctors} />
              <Route path={"/patientPortal"} exact component={patient_portal} />
              <Route path={"/prescription"} exact component={prescription} />
              <Route path={"/appointments"} exact component={appointments} />
              <Route path={"/Message"} exact component={Message} />
              <PrivateRoute path={"/ProfilePage"} exact component={ProfilePage} />

              <Route path={"/Login"} exact component={Login} />
            </AuthProvider>
            <Route path={"/Forget"} exact component={Forget} />

          </Switch>
          <Footer />

        </Router>
      </div>
    );
  }
}