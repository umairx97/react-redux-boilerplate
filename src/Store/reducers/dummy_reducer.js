import * as actionTypes from "../actions/Types";

export const dummy_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state
      };

    default:
      return state;
  }
};
