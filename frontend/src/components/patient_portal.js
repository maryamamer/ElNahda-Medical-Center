import React from "react";
import '../CSS/patient_portal.css'
import { FaHome, FaCalendarAlt, FaFileMedical, FaFlask, FaPills, FaHistory } from "react-icons/fa";
function patient_portal() {
    return (
        <>
            {/*  <!--*************************** Side NavBar ***************************--> */}
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    {/* <!-- <div><img src="./logo.jpeg" className="rounded-circle" alt="Not Found" width="75px"></div> -->
                    <!-- <div><b>مركز النهضة الطبي</b></div> -->
                    <!-- <i className="fas fa-clinic-medical"></i> --> */}
                </div>
                <ul className="sidebar-navigation">
                    <li className="header">لوحة المتابعة</li>
                    <li>
                        <a className="current" href="patient_portal.html">
                            {/* <i className="fas fa-home" aria-hidden="true"></i> */}
                            الرئيسية
                            <FaHome size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="appointments.html">
                            {/* <i className="fas fa-calendar-alt" aria-hidden="true"></i> */}
                            المواعيد
                            <FaCalendarAlt size={25} />
                        </a>
                    </li>
                    {/* <!-- <li>
                        <a href="#">
                            الرسائل
                            <i className="fas fa-comment" aria-hidden="true"></i>
                        </a>
                    </li> --> */}
                    <li>
                        <a href="#">
                            {/* <i className="fas fa-file-alt" aria-hidden="true"></i> */}
                            التقارير
                            <FaFileMedical size={25}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {/* <i className="fas fa-flask" aria-hidden="true"></i> */}
                            نتائج المعمل
                            <FaFlask size={25}/>
                        </a>
                    </li>
                    <li>
                        <a href="prescription.html">
                            {/* <i className="fas fa-pills" aria-hidden="true"></i> */}
                            الروشيتة
                            <FaPills size={25}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {/* <i className="fas fa-history" aria-hidden="true"></i> */}
                            السجل الصحي
                            <FaHistory size={25}/>
                        </a>
                    </li>
                    {/* <!-- <li>
                        <a href="#">
                            <i className="fas fa-cog" aria-hidden="true"></i>
                            الإعدادات
                        </a>
                    </li> --> */}
                </ul>
            </div>
            {/* <!--****************************************************************************--> */}

            {/* <!--*************************** 1st Row ***************************--> */}
            <div className="content-container">
                <div className="container-fluid">
                    <div className="row">

                        <div className="jumbotron">
                            <h1>مرحبا، الاسم</h1>
                            <p>إشعارات إشعارات إشعارات إشعارات إشعارات</p>
                        </div>

                        {/* <!--*************************** 1st Card - Medications ***************************--> */}
                        <div className="col-md-3 col-sm-12">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h3><b>الأدوية</b></h3>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item first-list-group text-center">Paracetamol 75 mg
                                        <p className="text-muted">قرص / يوميا</p>
                                        {/* <!-- <i className="fas fa-angle-right"></i> --> */}
                                    </li>
                                    <li className="list-group-item first-list-group text-center">Aspirin 75 mg
                                        <p className="text-muted">قرص / يوميا</p>
                                        {/* <!-- <i className="fas fa-angle-right"></i> --> */}
                                    </li>
                                    <li className="list-group-item first-list-group text-center">Ibuprofen 75 mg
                                        <p className="text-muted">قرص / يوميا</p>
                                        {/* <!-- <i className="fas fa-angle-right"></i> --> */}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!--*************************** 2nd Card - Condition ***************************--> */}
                        <div className="col-md-4 col-sm-12">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h3><b>الحالة المرضية</b></h3>
                                </div>
                                <div className="text-center">
                                    <label className="display-6"><b>التهاب الجيوب</b></label>
                                </div>
                                <div>
                                    <p className="text-muted">
                                        {/* <!-- <i className="far fa-clock"></i> --> */}
                                        وهو التهاب الجيوب (التجاويف) المجاورة للأنف ويشمل مخاط الأنف السميك، والأنف المسدود، وآلام الوجه
                                    </p>
                                </div>
                                <div>
                                    <div className="toright">
                                        <h5>
                                            د/ أمل عبد السلام
                                            <p><sub>دكتوراه أنف وأذن</sub></p>
                                        </h5>
                                    </div>

                                    <div className="toleft">
                                        <h6>
                                            أخر زيارة: الأحد، 12 فبراير
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--*************************** 3rd Card - Appointments ***************************--> */}
                        <div className="col-md-5 col-sm-12">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h3><b>المعاد القادم</b></h3>
                                </div>
                                <div className="text-center">
                                    <label className="display-6"><b>الجمعة، 1 يناير</b></label>
                                </div>
                                <div>
                                    <p className="text-center text-muted">
                                        10:30 - 10:00
                                        <i className="far fa-clock"></i>
                                    </p>
                                    <h5 className="text-center">
                                        د/ أمل عبد السلام
                                        <p><sub>دكتوراه أنف وأذن</sub></p>
                                    </h5>
                                </div>
                                <br />
                                <div>
                                    <div className="toright">
                                        <i className="fas fa-times-circle"></i>
                                        إلغاء الحجز
                                    </div>

                                    <div calss="text-left toleft" style={{ "text-align": "left" }}>
                                        <i className="fas fa-calendar-day"></i>
                                        تغيير المعاد
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--*************************** 4th Card - Recent ***************************--> */}
                        <div className="col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h3><b>المستجدات</b></h3>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <h6>قام الطبيب أحمد فاروق بالتعديل في سجلك الصحي وفقا لأعراضك يوم 7أغسطس.</h6>
                                        {/* <!-- <i className="fas fa-angle-right"></i> --> */}
                                    </li>
                                    <li className="list-group-item">
                                        <h6>قامت الدكتورة أمل بزيادة جرعة "Alfuosin" إلى 10mg.</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default patient_portal;