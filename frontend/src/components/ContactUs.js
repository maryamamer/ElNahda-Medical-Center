import React from "react";
import contactus from '../media/images/contactus.png'
import '../CSS/ContactUs.css'

function ContactUs() {
    return (
        <>
             <div className="container text-right">
        <div className="col-lg-12 px-lg-0 py-5 d-flex flex-row flex-wrap  justify-content-between ">
          <div className="col-lg-5 p-0 d-flex flex-column flex-wrap  justify-content-between section-title">
            <h1 className="text-center text-dark mb-5 ">تواصل معنا</h1>
            <div className="col-lg-12 p-0 pb-4 speciality-item d-flex flex-row flex-wrap align-items-center justify-content-between text-right">
              <div className="col-11 col-lg-11 p-0 pl-3">
                <p className="m-0">
                  العامرية -النهضة-كوبري شربات-اعلي صيدلية غباشي{" "}
                  <span className="col-lg-10 p-0">
                    <img
                      alt=""
                      src={location}
                      className="img-fluid ls-is-cached lazyloaded"
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-12 p-0 pb-4 speciality-item d-flex flex-row flex-wrap align-items-center justify-content-between text-right">
              <div className="col-11 col-lg-11 p-0 pl-3">
                <p className="m-0">03-3475160 / 01050600505 / 01050600606{" "}
                <span className="col-lg-10 p-0">
                  <img
                    alt=""
                    className="img-fluid ls-is-cached lazyloaded"
                    src={phone}
                  />
                </span>
                </p>

              </div>
            </div>
            <div className="col-lg-12 p-0 pb-4 speciality-item d-flex flex-row flex-wrap align-items-center justify-content-between text-right">
              
                
              <div className="col-11 col-lg-11 p-0 pl-3">
                <p className="m-0">info@gmail.com{" "}<span className="col-lg-10 p-0">
                  <img
                    alt=""
                    className="img-fluid ls-is-cached lazyloaded"
                    src={mail}
                  />
                </span></p>
              </div>


            </div>
          </div>
        </div>
        <div className="col-lg-5 p-0 d-flex flex-column flex-wrap align-items-start justify-content-between">
          <img src={map} className="img-fluid" alt="" />{" "}
        </div>
      </div>
      
  
        </>
    );
}

export default ContactUs;