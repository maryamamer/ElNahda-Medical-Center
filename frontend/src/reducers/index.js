import { combineReducers } from 'redux';
import auth from './auth';
import addapp from './addappointement';
import getdoctor from './getdoctor';

export default combineReducers({
    auth,
    addapp:addapp,
    doctor:getdoctor
});