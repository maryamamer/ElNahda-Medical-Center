
const INITIAL_STATE = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    app: null
};
export default function addapp(state = INITIAL_STATE, action) {
    const { type, payload } = action;
  switch (type) {
    case "ADD_APP":
      return {
          ...state,
        app: payload
    };

    case "REM_APP":
      return [...state.filter((app) => app.id !== action.payload)];

    default:
      return state;
  }
}