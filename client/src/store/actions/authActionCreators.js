import AUTH_ACTION_TYPES from './authActionTypes';

export const authRequest = () => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST,
});

export const authRequestSuccess = data => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST_SUCCESS,
  payload: {
    data,
  },
});

export const authRequestError = error => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST_ERROR,
  payload: {
    error,
  },
});

export const logoutRequestSuccess = () => ({
  type: AUTH_ACTION_TYPES.LOGOUT_REQUEST_SUCCESS,
});
