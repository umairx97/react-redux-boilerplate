import * as actionTypes from "./types";

export const dummyfunction = dummyargs => {
  return {
    type: actionTypes.DUMMY,
    dummyargs
  };
};
