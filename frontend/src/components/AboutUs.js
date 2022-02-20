import React from "react";
//  import Doctors from '../media/images/Doctors.png'
import '../CSS/AboutUs.css'

function AboutUs() {
    return (
        <>
            <body className="bgimg">

            <div className="container" >
                {/* <img src={Doctors}  alt="Doctors" /> */}
                <h1 className="center_header">عنّا</h1>
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
                </p>
            </div>
            </body>
        </>
    );
}

export default AboutUs;