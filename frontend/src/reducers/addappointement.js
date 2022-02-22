import {
  ADD_APPOINTMENT,
  ADD_Patient_APPOINTMENT,
  ADD_Doctor_APPOINTMENT,
  REM_APPOINTMENT,
} from "../actions/types";

const INITIAL_STATE = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  app: null,
};
export default function addapp(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_APPOINTMENT:
      return {
        ...state,
        app: payload,
      };
    case ADD_Patient_APPOINTMENT:
      return {
        ...state,
        app: payload,
      };
    case REM_APPOINTMENT:
      return [...state.filter((app) => app.id !== action.payload)];

    default:
      return state;
  }
}
