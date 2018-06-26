import { FETCH_DATA, FETCH_COLUMNS } from '../constants/actionTypes';

const defaultState = {
  columns: [],
  data: [],
  loading: false,
  errors: {}
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_DATA + '_FULFILLED': {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        errors: {}
      };
    }

    case FETCH_DATA + '_PENDING': {
      return {
        ...state,
        data: [],
        loading: true,
        errors: {}
      };
    }

    case FETCH_DATA + '_REJECTED': {
      const data = action.payload.response.data;
      return {
        ...state,
        loading: false,
        errors: { global: data.message }
      };
    }

    case FETCH_COLUMNS + '_FULFILLED': {
      return {
        ...state,
        columns: action.payload.data,
        loading: false,
        errors: {}
      };
    }

    case FETCH_COLUMNS + '_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      };
    }

    case FETCH_COLUMNS + '_REJECTED': {
      const data = action.payload.response.data;
      return {
        ...state,
        loading: false,
        errors: { global: data.message }
      };
    }

    default:
      return state;
  }
};
