import { GET_USER_LOGIN } from './types';
import getUser from '../services/getUser';

export const getListUser = () => {
  return async (dispatch) => {
    try {
      const getUserById = await getUser();
      console.log(getUserById + "lewat sini");

      await dispatch({
        type: GET_USER_LOGIN,
        payload: {
          loading: false,
          result: await getUserById,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_USER_LOGIN,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};