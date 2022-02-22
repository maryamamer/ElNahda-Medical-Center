import React from "react";
import contactus from '../media/images/contactus.png'
import '../CSS/ContactUs.css'

function ContactUs() {
    return (
        <>
            <div className="container">
                <img src={contactus}  alt="contactus" style={{ width:"100%" }}/>
                <h1 className="left_header">أتصل بنا</h1>
                <h2 className="left_header2">العنوان</h2>
                <p className="centered1">
                    1 العامرية - النهضة - كوبرى شربات - اعلى صيدلية غباشى
                </p>
                <h2 className="left_header3">أرقام الهاتف المحمول</h2>
                <p className="centered2">
                    01050600606 / 01050600505 / 03-3475160
                </p>
                <h2 className="left_header4">صفحة الفيسبوك: مركز النهضة الطبى</h2>
                <p className="centered3">
                    https://www.facebook.com/Nahdamedicalcenter
                </p>
                <h1 className="left_header5">مركز النهضة الطبى</h1>
                <button className="button">أحجز موعداً</button>
             
            </div>
        </>
    );
}

export default ContactUs;