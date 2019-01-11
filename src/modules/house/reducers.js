import types from "./types";

const defaultState = {
  houses: [],
  loading: false,
  error: null,
  details: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.FETCH_HOUSES_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case types.FETCH_HOUSES_FULFILLED: {
      return {
        ...state,
        loading: false,
        houses: action.payload
      };
    }

    case types.FETCH_HOUSES_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case types.FETCH_HOUSE_BY_ID_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case types.FETCH_HOUSE_BY_ID_FULFILLED: {
      return {
        ...state,
        loading: false,
        details: action.payload
      };
    }

    case types.FETCH_HOUSE_BY_ID_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case types.DELETE_HOUSE_BY_ID_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case types.DELETE_HOUSE_BY_ID_FULFILLED: {
      const filteredHouses = state.houses.filter(
        item => item._id !== action.id
      );

      return {
        ...state,
        loading: false,
        houses: filteredHouses
      };
    }

    case types.DELETE_HOUSE_BY_ID_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case types.FILTER_HOUSE_BY_ID: {
      return {
        ...state,
        details: state.houses.filter(item => item._id === action.id)[0]
      };
    }

    case types.CLEAR_DETAILS: {
      return {
        ...state,
        details: null
      };
    }

    default:
      return state;
  }
}
