import React from "react";
import { Link } from "react-router-dom";
import Doctor from "../media/images/Doctor.jpeg";
import "../CSS/dr_profile.css";

import { BsFillTelephoneOutboundFill} from "react-icons/bs";
import { BsFillEnvelopeFill} from "react-icons/bs";
import { BsFillAwardFill} from "react-icons/bs";
import { BsBook } from "react-icons/bs";






export default function Dr_Profile() {
  return (
    <>
      <div className="row ">
        <div className="col-md-3 ">
          <div className="doc-det">
            <img src={Doctor} alt="" />
            <svg
              xmlns={"http://www.w3.org/2000/svg"}
              width="30"
              height="30"
              fill="white"
              className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
            <h5>دكتور دانيال فوزي </h5>
            <div className="stars">
              <svg
                repeat-element="5"
                className="star"
                xmlns={"http://www.w3.org/2000/svg"}
                width="16"
                height="16"
                fill="yellow"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
            <div className="info">
              <h6>
                <br />
                تخصص : أخصائي أمراض القلب والباطنة
                <br /> ثمن الكشف : 100 جنيه مصري
                <br /> الخبرة : 20 عام
              </h6>
            </div>
          </div>
          <div className="book m-5 p-3 text-center">
            <i className="fas fa-calendar fa-2x"></i>
            <Link to="book.html">
              <input
                type="button"
                className="btn btn-primary"
                id="book-btn"
                value="احجز الأن"
              />
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="d-card">
            <div className="info">
              <h6>

                <br /> &nbsp; الهاتف <BsFillTelephoneOutboundFill />
                : 02-10293792382
                <br />  &nbsp; <BsFillEnvelopeFill/>الميل :
                d@gmail.com
                <br /> <BsBook /> &nbsp; التعليم :
                دكتوراة من جامعة القاهرة
                <br /> <BsFillAwardFill/> &nbsp; الانجازات : حاصل

                على جائزة أفضل طبيب
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-5">
        <div className="col">
          <div className="recommend">
            <h6>المقترحات</h6>
            <img src={Doctor} width="100px" alt="" height="100px" />
            <img src={Doctor} width="100px" alt="" height="100px" />
            <img src={Doctor} width="100px" alt="" height="100px" />
            <img src={Doctor} width="100px" alt="" height="100px" />
          </div>
        </div>
        <div className="col">
          <section>
            <div className="container">
              <div className="row">
                <div className="col-sm-5 col-md-6 col-12 pb-4">
                  <h1>التعليقات</h1>
                  <div className="comment mt-4 text-justify float-left">
                    <img
                      src={"https://i.imgur.com/yTFUilP.jpg"}
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h4>شخصية 1</h4> <span>- 20 October, 2018</span> <br />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusamus numquam assumenda hic aliquam vero sequi velit
                      molestias doloremque molestiae dicta?
                    </p>
                  </div>
                  <div className="text-justify darker mt-4 float-right">
                    <img
                      src={"https://i.imgur.com/CFpa3nK.jpg"}
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h4>Rob Simpson</h4> <span>- 20 October, 2018</span> <br />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusamus numquam assumenda hic aliquam vero sequi velit
                      molestias doloremque molestiae dicta?
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                  <form id="algin-form">
                    <div className="form-group">
                      <h4>اترك تعليق</h4> <label for="message">رسالتك</label>{" "}
                      <textarea
                        name="msg"
                        id=""
                        msg
                        cols="30"
                        rows="5"
                        className="form-control"
                        style={{ "background-color": "white" }}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label for="name">الاسم</label>{" "}
                      <input
                        type="text"
                        name="name"
                        id="fullname"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label for="email">الميل</label>{" "}
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                    </div>

                    <div className="form-inline">
                      <input
                        type="checkbox"
                        name="check"
                        id="checkbx"
                        className="mr-1"
                      />
                      <label for="subscribe">
                        Subscribe me to the newlettter
                      </label>
                    </div>
                    <div className="form-group">
                      <button type="button" id="post" className="btn">
                        انشر تعليقك
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
