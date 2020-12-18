import { combineReducers } from "redux";

const api = (symbol) => `/api/stocks/${symbol}/detail`;
const name = "STOCKS";

export const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

export const types = {
  REQUEST: `REQUEST_${name}`,
  FAILURE: `FAILURE_${name}`,
  SUCCESS: `SUCCESS_${name}`,
  RESET: `RESET_${name}`,
};
const isLoading = (state = initialState.isLoading, { type }) => {
  const mapping = {
    [types.RESET]: initialState.isLoading,
    [types.SUCCESS]: false,
    [types.REQUEST]: true,
    [types.FAILURE]: false,
  };

  return Object.prototype.hasOwnProperty.call(mapping, type)
    ? mapping[type]
    : state;
};

const error = (state = initialState.error, { type, message }) => {
  const mapping = {
    [types.RESET]: initialState.error,
    [types.SUCCESS]: false,
    [types.REQUEST]: false,
    [types.FAILURE]: message || true,
  };

  return Object.prototype.hasOwnProperty.call(mapping, type)
    ? mapping[type]
    : state;
};

const data = (state = initialState.data, { type, payload }) => {
  const mapping = {
    [types.RESET]: initialState.data,
    [types.SUCCESS]: payload,
    [types.FAILURE]: initialState.data,
  };

  return mapping[type] || state;
};

export const request = (params) => ({
  type: types.REQUEST,
  params,
});

export const reset = () => ({
  type: types.RESET,
});

export const onSuccess = (payload) => ({
  type: types.SUCCESS,
  payload,
});

export const onError = () => ({
  type: types.FAILURE,
});

export const find = (query) => (dispatch) => {
  dispatch(request());

  return fetch(api(query))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((payload) => dispatch(onSuccess(payload)))
    .catch((err) => dispatch(onError(err)));
};

export default combineReducers({
  isLoading,
  error,
  data,
});
