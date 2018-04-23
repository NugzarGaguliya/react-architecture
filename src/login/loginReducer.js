import { createReducer } from '@acemarke/redux-starter-kit';

import * as loginActionTypes from './loginActionTypes';

const initialState = {
  token: null,
};

const reducers = {
  [loginActionTypes.LOGIN](state, {payload}) {
    state.token = payload.token;
  },
};

export default createReducer(initialState, reducers);