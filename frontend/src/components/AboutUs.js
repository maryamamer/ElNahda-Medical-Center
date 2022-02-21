import React from "react";
import '../CSS/AboutUs.css'
import slide1 from "../media/images/slide-1.jpg";
import slide2 from "../media/images/slide-2.jpg";
import slide3 from "../media/images/slide-3.jpg";

function AboutUs() {
    return (
        <>

         
            <div className="parent container d-flex justify-content-center align-items-center h-100">
              <div className="row ">
                  <div className="col col-md-6"> 
                  <h1 className="center_header text-dark">عنّا</h1>
                  <p className="centered">
    أول واحدث مجمع طبى متكامل بالنهضة
                    صفوة من كبار الاستشاريين والأخصائيين فى جميع التخصصات وتشمل
                    عيادتنا
                    مركز النهضة الطبى يوفر لك عيادات خارجية شاملة جميع التخصصات
                    تحت إشراف
                    - معمل تحاليل طبية متكامل - مركز آشعة مجهز باحدث اجهزة
                    الآشعة
                    الديجيتال - عيادة الجراحة - عيادة الرمد - أكبر واضخم مركز
                    علاج طبيعى
                    متكامل بغرب الاسكندرية - عيادة العظام - عيادة الجلدية
                    والتجميل - عيادة
                    أنف و أذن و حنجرة - عيادة أطفال - عيادة الباطنة - عيادة
                    النساء
                    والتوليد - عيادة الأسنان
                </p></div>
                        <div className="col col-md-6">
                            {/* <img src={Doctors} alt="Doctors" width={700}/>  */}
                            <div id="hero" className="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <ul className="carousel-indicators">
            <li data-target="#hero" data-slide-to="0" className="active"></li>
            <li data-target="#hero" data-slide-to="1"></li>
            <li data-target="#hero" data-slide-to="2"></li>
            <li data-target="#hero" data-slide-to="3"></li>
            

          </ul>

          {/* <!-- The slideshow --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">

              <img src={slide1} alt="Dr"  />

             
            </div>
            <div className="carousel-item">

              <img src={slide2} alt="Lab"  />
            </div>

            <div className="carousel-item">
              <img src={slide3} alt="Emergcy" />

            </div>
          </div>

          {/* <!-- Left and right controls --> */}

          <a className="carousel-control-prev" href="#hero" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#hero" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>

        </div>

                            </div>
              </div>
              </div>

        </>
    );
}

export default AboutUs;