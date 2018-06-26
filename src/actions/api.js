import { client } from './client';
import { FETCH_DATA, FETCH_COLUMNS } from '../constants/actionTypes';

export function fetchData(variable) {
  return dispatch => {
    return dispatch({
      type: FETCH_DATA,
      payload: client.get('/data/' + variable)
    });
  };
}

export function fetchColumns() {
  return dispatch => {
    return dispatch({
      type: FETCH_COLUMNS,
      payload: client.get('/columns')
    });
  };
}
