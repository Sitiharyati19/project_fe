import logout from "../services/logout";
import {
    LOGOUT
} from './types'

export const userLogout = () => (dispatch) => {
    logout.logout();
    dispatch({
      type: LOGOUT,
    });
};
