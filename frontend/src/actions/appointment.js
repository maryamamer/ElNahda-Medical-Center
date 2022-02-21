import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { FaAccessibleIcon } from 'react-icons/fa';
import {
    ADD_APPOINTMENT,
    REM_APPOINTMENT,
    ADD_Patient_APPOINTMENT
} from './types';

export const add_appointment = (date, message) => async dispatch => {

  
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }

        const body = JSON.stringify({ date:date, message:message });

        try {
            const res = await axios.post(`/Appointments/`,body,config);
    
            dispatch({
                type: ADD_APPOINTMENT,
                payload: res.data
            });
            console.log(res.data)
        } catch (err) {
           console.log(err)
        }
    }

export const add_patient_appointment = () => async dispatch => {

    const apps =useSelector((state)=>state.addapp)
    console.log(apps)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }

        const body = JSON.stringify({ app_id:apps.id, patient_id:localStorage.getItem('access').id });
         
        try {
            
            const res = await axios.post(`/PatientAppointments/`,body,config);
    
            dispatch({
                type: ADD_Patient_APPOINTMENT,
                payload: res.data
            });
            console.log(res.data)
        } catch (err) {
           console.log(err)
        }
    }
