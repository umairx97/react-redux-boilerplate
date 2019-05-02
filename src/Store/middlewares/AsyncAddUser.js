import { add_user } from "../actions/add_user";

export const AsyncAddUser = data => {
  return dispatch => {
    // Do Async Work Here
    dispatch(add_user(data));
  };
};
