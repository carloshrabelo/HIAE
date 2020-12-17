import { combineReducers } from "redux";

const api = "/api/stocks";
const name = "STOCKS";

export const initialState = {
  isLoading: true,
  error: false,
  data: {},
};

export const REQUEST = `REQUEST_${name}`;
export const FAILURE = `FAILURE_${name}`;
export const SUCCESS = `SUCCESS_${name}`;

const isLoading = (state = initialState.isLoading, { type }) => {
  const mapping = {
    [SUCCESS]: false,
    [REQUEST]: true,
    [FAILURE]: false,
  };

  return Object.prototype.hasOwnProperty.call(mapping, type)
    ? mapping[type]
    : state;
};

const error = (state = initialState.error, { type, message }) => {
  const mapping = {
    [SUCCESS]: false,
    [REQUEST]: false,
    [FAILURE]: message || true,
  };

  return Object.prototype.hasOwnProperty.call(mapping, type)
    ? mapping[type]
    : state;
};

const data = (state = initialState.data, { type, payload }) => {
  const mapping = {
    [SUCCESS]: payload,
    [FAILURE]: initialState.data,
  };

  return mapping[type] || state;
};

export const request = (params) => ({
  type: REQUEST,
  params,
});

export const onSuccess = (payload) => ({
  type: SUCCESS,
  payload,
});

export const onError = () => ({
  type: FAILURE,
});

export const find = (query) => (dispatch) => {
  dispatch(request());

  return fetch(`${api}/${query}`)
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
