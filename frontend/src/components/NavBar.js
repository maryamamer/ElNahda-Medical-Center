import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";
import { useContext } from "react";
import New from "../media/images/New.png";

import Auth from "../context/auth";

function NavBar() {
  let { user, logoutuser } = useContext(Auth);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler ml-auto custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {user ? (
              <li className="nav-item">
                <Link onClick={logoutuser} className="nav-link" to="/Logout">
                  {" "}
                  تسجيل خروج
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link LastItem" to="/Login">
                  {" "}
                  تسجيل الدخول{" "}
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
                اتصل بنا
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                عنّا
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Doctors">
                الأطباء
                {/* <span className="sr-only">(current)</span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                الرئيسية{" "}
              </Link>
            </li>
          </ul>
          <Link className="navbar-brand" to="#">
            <img
              src={New}
              className="img-responsive logo"
              width="100"
              height="80"
              alt="New"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
