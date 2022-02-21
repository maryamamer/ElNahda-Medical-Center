import React, { useState, useEffect } from "react";
import New from '../media/images/New.png'
import Ali from '../media/images/ALi.png'
import axios from "axios"
import Nada from '../media/images/Nada.png'
import '../CSS/Doctors.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


function Doctors() {
    const [doctors, setdoctor] = useState([]);

    useEffect(() => {
        axios.get('/doctors')
            .then(res => setdoctor(res.data))
            .catch((err) => console.log(err));


    });

    
    return (
        <>

            <div classNameName="container-fluid">
                <div className="row justify-content-around">
                    <form>
                        <input className="search" type="search" placeholder="Search" />
                    </form>
                </div>
                <div className="container-fluid">
                    <div className="row m-5">
                        {
                            doctors.map((doctor, i) => {
                                return (
                                    <>
                                        <div className="col-md-3">
                                            <Link to= "/dr">
                                            <div className="divDoctor">
                                                <img className="img1" src={`${doctor.image}`} />
                                                <div className="overview justify-content-evenly">
                                                    <h2>{doctor.fullname}</h2>
                                                    <p> {doctor.specialization}</p>
                                                    <p>التقييم</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    </>
                                )
                            }
                            )}
                    </div>
                </div>
            </div>

        </>

    );
}

export default Doctors;