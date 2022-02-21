import React from "react";

import "../CSS/AboutUs.css";
import slide1 from "../media/images/slide-1.jpg";
import slide2 from "../media/images/slide-2.jpg";
import slide3 from "../media/images/slide-3.jpg";
import CountUp from 'react-countup';
function AboutUs() {
  return (
    <>
      <div className="parent container d-flex justify-content-center align-items-center h-100">
        <div className="row ">
          <div className="col col-md-6">
            <h1 className="center_header text-dark">عنّا</h1>
            <p className="centered">
              أول واحدث مجمع طبى متكامل بالنهضة صفوة من كبار الاستشاريين
              والأخصائيين فى جميع التخصصات وتشمل عيادتنا مركز النهضة الطبى يوفر
              لك عيادات خارجية شاملة جميع التخصصات تحت إشراف - معمل تحاليل طبية
              متكامل - مركز آشعة مجهز باحدث اجهزة الآشعة الديجيتال - عيادة
              الجراحة - عيادة الرمد - أكبر واضخم مركز علاج طبيعى متكامل بغرب
              الاسكندرية - عيادة العظام - عيادة الجلدية والتجميل - عيادة أنف و
              أذن و حنجرة - عيادة أطفال - عيادة الباطنة - عيادة النساء والتوليد
              - عيادة الأسنان
            </p>
          </div>
          <div className="col col-md-6">
            {/* <img src={Doctors} alt="Doctors" width={700}/>  */}
            <div id="hero" className="carousel slide" data-ride="carousel">
              {/* <!-- Indicators --> */}
              <ul className="carousel-indicators">
                <li
                  data-target="#hero"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#hero" data-slide-to="1"></li>
                <li data-target="#hero" data-slide-to="2"></li>
                <li data-target="#hero" data-slide-to="3"></li>
              </ul>

              {/* <!-- The slideshow --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slide1} alt="Dr" />
                </div>
                <div className="carousel-item">
                  <img src={slide2} alt="Lab" />
                </div>
                <div className="carousel-item">
                  <img src={slide3} alt="Emergcy" />
                </div>
              </div>

              {/* <!-- Left and right controls --> */}

              <a
                className="carousel-control-prev"
                href="#hero"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#hero"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="branch-content-section main-content-section key-highlights ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 px-lg-0 py-5 d-flex flex-row flex-wrap align-items-start justify-content-between">
              <div className="col-lg-12 p-0">
                <h1 className="text-uppercase text-center mb-5 pb-3 text-dark">
              طاقة الإستيعاب              </h1>
               
              </div>
            
            
              <div className="col-6 key-ht-item col-lg-3 p-0 pb-4 pb-lg-0 d-flex flex-row flex-wrap align-items-start align-items-lg-center justify-content-between">
                <div className="col-4 col-lg-4 p-0 pr-3">
                  <div className="col-lg-12 p-0">
                    <img
                      alt=""
                      data-src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-beds.png"
                      className="img-fluid lazyloaded"
                      src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-beds.png"
                    />
                    <noscript>
                      <img
                        className="img-fluid"
                        src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-beds.png"
                        alt=""
                      />
                    </noscript>
                  </div>
                </div>
                <div className="col-8 col-lg-8 p-0 pr-3">
                  <h2 className="font-32 font-pr-black">
                  <CountUp start={0} end={250} duration={2} />
                    <span class="plus">+</span>
                  </h2>
                  <p className="p-0 m-0 text-uppercase font-2">السرائر</p>
                </div>
              </div>
              <div className="col-6 key-ht-item col-lg-3 p-0 pb-4 pb-lg-0 d-flex flex-row flex-wrap align-items-start align-items-lg-center justify-content-between">
                <div className="col-4 col-lg-4 p-0 pr-3">
                  <div className="col-lg-12 p-0">
                    <img
                      alt=""
                      data-src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-doctors.png"
                      className="img-fluid lazyloaded"
                      src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-doctors.png"
                    />
                    <noscript>
                      <img
                        className="img-fluid"
                        src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-doctors.png"
                        alt=""
                      />
                    </noscript>
                  </div>
                </div>
                <div className="col-8 col-lg-8 p-0 pr-3">
                  <h2 className="font-32 font-pr-black">
                  <CountUp start={0} end={100} duration={2} />
                    <span className="plus">+</span>
                  </h2>
                  <p className="p-0 m-0 text-uppercase font-2">الأطباء</p>
                </div>
              </div>
              <div class="col-6 key-ht-item col-lg-3 p-0 pb-4 pb-lg-0 d-flex flex-row flex-wrap align-items-start align-items-lg-center justify-content-between">
                <div className="col-4 col-lg-4 p-0 pr-3">
                  <div className="col-lg-12 p-0">
                    <img
                      alt=""
                      data-src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-nurses.png"
                      className="img-fluid lazyloaded"
                      src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-nurses.png"
                    />
                    <noscript>
                      <img
                        className="img-fluid"
                        src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-nurses.png"
                        alt=""
                      />
                    </noscript>
                  </div>
                </div>
                <div className="col-8 col-lg-8 p-0 pr-3">
                  <h2 className="font-32 font-pr-black">
                  <CountUp start={0} end={180} duration={2} />                    <span class="plus">+</span>
                  </h2>
                  <p className="p-0 m-0 text-uppercase font-2">الطاقم الطبي</p>
                </div>
              </div>
              <div class="col-6 key-ht-item col-lg-3 p-0 pb-4 pb-lg-0 d-flex flex-row flex-wrap align-items-start align-items-lg-center justify-content-between">
                <div className="col-4 col-lg-4 p-0 pr-3">
                  <div className="col-lg-12 p-0">
                    <img
                      alt=""
                      data-src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-support-staff.png"
                      className="img-fluid lazyloaded"
                      src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-support-staff.png"
                    />
                    <noscript>
                      <img
                        className="img-fluid"
                        src="https://prathimahospitals.com/wp-content/uploads/2020/04/icon-support-staff.png"
                        alt=""
                      />
                    </noscript>
                  </div>
                </div>
                <div className="col-8 col-lg-8 p-0 pr-3">
                  <h2 className="font-32 font-pr-black">
                  <CountUp start={0} end={50} duration={2} />
                    <span class="plus">+</span>
                  </h2>
                  <p className="p-0 m-0 text-uppercase font-2">طاقم الدعم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </>
  );

}

export default AboutUs;
