import types from "./types";
import axios from "axios";

const apiUrl = "http://mr-test-backend.sadek.usermd.net";

const fetchAllHouses = () => {
  return function(dispatch) {
    dispatch({ type: types.FETCH_HOUSES_REQUESTED });

    return new Promise((resolve, reject) => {
      axios
        .get(`${apiUrl}/houses`)
        .then(response => {
          dispatch({
            type: types.FETCH_HOUSES_FULFILLED,
            payload: response.data.houses
          });

          resolve();
        })
        .catch(error => {
          dispatch({ type: types.FETCH_HOUSES_REJECTED, payload: error });

          reject(error);
        });
    });
  };
};

const fetchHouseById = id => {
  return function(dispatch) {
    dispatch({ type: types.FETCH_HOUSE_BY_ID_REQUESTED });

    return new Promise((resolve, reject) => {
      axios
        .get(`${apiUrl}/houses/${id}`)
        .then(response => {
          dispatch({
            type: types.FETCH_HOUSE_BY_ID_FULFILLED,
            payload: response.data
          });

          resolve();
        })
        .catch(error => {
          dispatch({ type: types.FETCH_HOUSE_BY_ID_REJECTED, payload: error });

          reject(error);
        });
    });
  };
};

const deleteHouseById = id => {
  return function(dispatch) {
    dispatch({ type: types.DELETE_HOUSE_BY_ID_REQUESTED });

    return new Promise((resolve, reject) => {
      axios
        .delete(`${apiUrl}/houses/${id}`)
        .then(() => {
          dispatch({
            type: types.DELETE_HOUSE_BY_ID_FULFILLED,
            id
          });

          resolve();
        })
        .catch(error => {
          dispatch({ type: types.DELETE_HOUSE_BY_ID_REJECTED, payload: error });

          reject(error);
        });
    });
  };
};

const filterHouseById = id => {
  return {
    type: types.FILTER_HOUSE_BY_ID,
    id
  };
};

const clearDetails = () => {
  return {
    type: types.CLEAR_DETAILS
  };
};

export default {
  fetchAllHouses,
  fetchHouseById,
  deleteHouseById,
  filterHouseById,
  clearDetails
};
