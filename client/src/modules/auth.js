import { handleActions } from "redux-actions";
import { pendingTask, begin, end } from "react-redux-spinner";
// import { URL_AUTH } from "../util/config";
// import axios from "axios";

const AUTHORIZE_PENDING = "AUTHORIZE_PENDING";
const AUTHORIZE_FULFILLED = "AUTHORIZE_FULFILLED";
const AUTHORIZE_REJECTED = "AUTHORIZE_REJECTED";
const AUTHORIZE_RESET = "AUTHORIZE_RESET";

function requestToken(info) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: { token: info } });
    }, 1000);
  });
  // return axios.post(URL_AUTH, info);
}
export const signIn = userInfo => dispatch => {
  dispatch({
    type: AUTHORIZE_PENDING,
    payload: userInfo,
    [pendingTask]: begin
  });

  return requestToken(userInfo)
    .then(response => {
      localStorage.setItem("user", response.data.token);
      dispatch({
        type: AUTHORIZE_FULFILLED,
        payload: response,
        [pendingTask]: end
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

export const signOut = () => dispatch => {
  // TODO:
  // axios call to server to signout

  dispatch({ type: AUTHORIZE_RESET });
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
    },

    [AUTHORIZE_RESET]: (state, acition) => {
      return {
        pending: false,
        error: false,
        userInfo: {},
        payload: "",
        authorized: false
      };
    }
  },
  initialState
);
