import { UPDATE_TITLE, UPDATE_CLOCK } from "./actions";

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, appTitle: action.payload };
    case UPDATE_CLOCK:
      return { ...state, appClock: action.payload };
    default:
      return state;
  }
};

export default appReducer;
