import AUTH_ACTION_TYPES from './authActionTypes';

export const signUpRequest = values => ({
  type: AUTH_ACTION_TYPES.SIGNUP_REQUEST,
  payload: {
    values,
  },
});

export const signInRequest = values => ({
  type: AUTH_ACTION_TYPES.SIGNIN_REQUEST,
  payload: {
    values,
  },
});

export const refreshAuthRequest = values => ({
  type: AUTH_ACTION_TYPES.REFRESH_AUTH_REQUEST,
  payload: {
    values,
  },
});

export const authRequest = () => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST_SUCCESS,
  payload: {
    data,
  },
});


export const authRequestError = () => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST_ERROR,
  payload: {
    error,
  },
});

export const logoutRequest = () => ({
  type: AUTH_ACTION_TYPES.LOGOUT_REQUEST,
});

export const logoutRequestSuccess = () => ({
  type: AUTH_ACTION_TYPES.LOGOUT_REQUEST_SUCCESS,
});

export const logoutRequestError = () => ({
  type: AUTH_ACTION_TYPES.LOGOUT_REQUEST_ERROR,
});

