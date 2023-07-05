import { GET_USER_LOGIN } from '../actions/types';

const initialStateProduct = {
  userLoading: false,
  userResult: false,
  userError: false,
};

export const getListUserReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'GET_USER_LOGIN':
      return {
        ...state,
        userLoading: action.payload.loading,
        userResult: action.payload.result,
        userError: action.payload.error,
      };
    default:
      return state;
  }
};