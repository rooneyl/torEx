import { handleActions } from "redux-actions";
import { URL_GETFILE } from "../util/config";
import axios from "axios";

const GET_FILE_PENDING = "GET_FILE_PENDING";
const GET_FILE_FUFILLED = "GET_FILE_FUFILLED";
const GET_FILE_REJECTED = "GET_FILE_REJECTED";

// const getFileAPI = userInfo => {
//   return axios.get(URL_GETFILE, userInfo);
// };
//
// const updateFileAPI = (userInfo,fileInfo) {
//   return axios.get("..", userInfo);
// };

const getFileAPI = userInfo => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: "File_A",
          size: 234,
          downloaded: 23,
          complete: false,
          hash: "ASCCSDFA@#$!!"
        },
        {
          name: "File_B",
          size: 2340,
          downloaded: 2340,
          complete: true,
          hash: "2342SF#G#@!@4"
        }
      ]);
    }, 1000);
  });
};

const updateFileAPI = (userInfo, fileInfo) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "File_A",
        size: 234,
        downloaded: 103,
        complete: false,
        hash: "ASCCSDFA@#$!!"
      });
    }, 1000);
  });
};

export const getFileList = userInfo => dispatch => {
  dispatch({ type: GET_FILE_PENDING });
  return getFileAPI(userInfo)
    .then(response => {
			// find 
      dispatch({
        type: GET_FILE_FUFILLED,
        payload: response
      });
    })
    .catch(error => {
      dispatch({
        type: GET_FILE_REJECTED
      });
    });
};

export const updateFileList = (userInfo, fileInfo) => dispatch => {
  return updateFileList(userInfo, fileInfo)
    .then(response => {
      dispatch({
        type: GET_FILE_FUFILLED,
        payload: response
      });
    })
    .catch(error => {
      dispatch({
        type: GET_FILE_REJECTED
      });
    });
};

const initialState = {
  initialized: false,
  error: false,
  files: []
};

export default handleActions(
  {
    [GET_FILE_PENDING]: (state, action) => {
      return {
        ...state,
        initialized: false,
        error: false
      };
    },

    [GET_FILE_FUFILLED]: (state, action) => {
      return {
        ...state,
        initialized: true,
        error: false,
        files: action.payload
      };
    },

    [GET_FILE_REJECTED]: (state, action) => {
      return {
        ...state,
        error: true
      };
    }
  },
  initialState
);
