import React from "react";
import  New  from '../media/images/New.png'
import  Ali  from '../media/images/ALi.png'
import  Nada  from '../media/images/Nada.png'
import '../CSS/Doctors.css'

function Doctors() {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-4-md">
                        <form>
                            <input className="search" type="search" placeholder="Search" />
                        </form>
                    </div>
                </div>
                <div className="row justify-content-around OuterDiv">
                    <div className="col-4-md div1">
                        <img className="img1" src={New} alt="Doctors" />
                        <div className="overview justify-content-evenly">
                            <h2>دكتورة/ آية</h2>
                            <p>التخصص : أمراض الرئة</p>
                            <p>التقييم</p>
                        </div>
                    </div>

                    <div className="col-4-md div1">
                        <img className="img2" src={Ali} alt="Ali"/>
                    </div>
                    <div className="col-4-md div1">
                        <img className="img3" src={Nada} alt="Nada" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Doctors;