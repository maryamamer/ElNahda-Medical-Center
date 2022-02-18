import React,{useState,useEffect}from "react";
import  New  from '../media/images/New.png'
import  Ali  from '../media/images/ALi.png'
import axios from "axios"
import  Nada  from '../media/images/Nada.png'
import '../CSS/Doctors.css'



function Doctors() {
    const [doctors,setdoctor] = useState([]);

    useEffect(() => { 
        axios.get('/doctors')
        .then(res => setdoctor(res.data))
        .catch((err) => console.log(err));


     });


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
                    {
                    doctors.map((doctor,i) => { 
                    return (
                        <>
                         <div className="col-4-md div1" >
                        <img className="img1" src={New} alt="Doctors" />
                        <div className="overview justify-content-evenly">
                            <h2>{doctor.fullname}</h2>
                            <p> {doctor.specialization}</p>
                            <p>التقييم</p>
                        </div>
                    </div>

                    <div className="col-4-md div1">
                        <img className="img2" src={`${doctor.image}`} />
                    </div>
                    {/* <div className="col-4-md div1">
                        <img className="img3" src={Nada} alt="Nada" />
                    </div> */}
                    </>
                    )}
                    
                    )
                   
                   
}
                </div>
                    
            </div>

        </>

    );
}

export default Doctors;