import axios from 'axios';
import {
    ADD_APPOINTMENT,
    REM_APPOINTMENT
} from './types';

export const add_appointment = (date, message) => async dispatch => {

    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }; 

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
};