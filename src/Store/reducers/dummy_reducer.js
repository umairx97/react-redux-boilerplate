import * as actionTypes from "../actions/Types";

const initialAppState = {
  title: "Redux Boilerplate"
};
export const dummy_reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        title: action.payload.data
      };

    default:
      return state;
  }
};
