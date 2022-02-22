import { combineReducers } from 'redux';
import auth from './auth';
import addapp from './addappointement';

export default combineReducers({
    auth,
    addapp:addapp
});