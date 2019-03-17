import * as actionTypes from '../actions/types';

export const dummy_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DUMMY:
      return "this is a dummy reducer";

    default:
      return state;
  }
};
