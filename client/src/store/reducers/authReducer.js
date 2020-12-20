import produce from 'immer';
import AUTH_ACTION_TYPES from '../actions/authActionTypes';
import createReducer from './helpers/createReducer';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const handlers = {
  [AUTH_ACTION_TYPES.AUTH_REQUEST]: produce(draftState => {
    draftState.isLoading = true;
  }),
  [AUTH_ACTION_TYPES.AUTH_REQUEST_SUCCESS]: produce((draftState, action) => {
    const {
      payload: {
        data: { user },
      },
    } = action;
    draftState.isLoading = false;
    draftState.user = user;
  }),
  [AUTH_ACTION_TYPES.AUTH_REQUEST_ERROR]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;
    draftState.isLoading = false;
    draftState.error = error;
  }),
  [AUTH_ACTION_TYPES.LOGOUT_REQUEST]: () => ({
    ...initialState,
  }),
};

const authReducer = createReducer(initialState, handlers);

export default authReducer;