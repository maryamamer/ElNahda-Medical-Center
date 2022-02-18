import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
      <footer
        className="section footer-classNameic "
        style={{ background: "#1e386d" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ftco-footer-widget mb-4">
              <h2
                class="ftco-heading-2 text-right text-light"
                style={{
                  "margin-bottom": "5px!important",
                  "padding-right": "25px!important",
                }}
              >
                للإستفسار
              </h2>
              <div className="block-23 mb-3 text-right text-light">
                <ul >
                  <li >
                    <Link
                      className="text"
                      style={{ "padding-right": "10px!important" }}
                      target="_blank"
                      to=""
                    >
                      العامرية -النهضة-كوبري شربات-اعلي صيدلية غباشي{" "}
                    </Link>
                  </li>
                  <li style={{ "margin-bottom": "0px!important" }}>
                    <a href="tel:01050600505">
                      <span
                        className="text"
                        style={{ "padding-right": "10px!important" }}
                      >
                        03-3475160 / 01050600505 / 01050600606
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:#">
                      <span
                        className="text"
                        style={{ "padding-right": "10px !important" }}
                      >
                        Info@gmail.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/Nahdamedicalcenter">
                      <span
                        className="text"
                        style={{ "padding-right": "10px !important" }}
                      >
                        مركز النهضة الطبي
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-md-6 ftco-footer-widget mb-4">
              <h1 className="ftco-heading-2 text-right text-light">
                مركز النهضة الطبي{" "}
              </h1>
              <h6 className="text-right text-light" dir="rtl">
                المركز مجهز بأحدث الأجهزة وتقنيات الكشف والعلاج ويضم كل التخصصات
                الطبية لخدمة جميع الحالات المرضية على يد نخبة من أفضل الأساتذة
                والمختصين.
              </h6>
            </div>
          </div>
        </div>
        <hr />

        <div className="copyright text-center text-light">
          &copy; حقوق النشر ترجع لـ{" "}
          <strong>
            <span>مركز النهضة الطبي</span>
          </strong>
        </div>
        <div className="credits text-center text-light">صمم بواسطة فريق4</div>
      </footer>
    </>
  );
}
