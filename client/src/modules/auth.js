import { handleActions } from "redux-actions";
// import { URL_AUTH } from "../util/config";
// import axios from "axios";

const AUTHORIZE_PENDING = "AUTHORIZE_PENDING";
const AUTHORIZE_FULFILLED = "AUTHORIZE_FULFILLED";
const AUTHORIZE_REJECTED = "AUTHORIZE_REJECTED";

function requestToken(info) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: { token: info } });
    }, 3000);
  });
  // return axios.post(URL_AUTH, info);
}
export const authorize = info => dispatch => {
  dispatch({
    type: AUTHORIZE_PENDING,
    payload: info
  });

  return requestToken(info)
    .then(response => {
      localStorage.setItem("user", response.data.token);
      dispatch({
        type: AUTHORIZE_FULFILLED,
        payload: response
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: AUTHORIZE_REJECTED,
        payload: error
      });
    });
};

const initialState = {
  pending: false,
  error: false,
  userInfo: {},
  payload: "",
  authorized: false
};

export default handleActions(
  {
    [AUTHORIZE_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false,
        userInfo: action.payload
      };
    },

    [AUTHORIZE_FULFILLED]: (state, action) => {
      return {
        ...state,
        pending: false,
        authorized: true,
        payload: action.payload
      };
    },

    [AUTHORIZE_REJECTED]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true
      };
    }
  },
  initialState
);
