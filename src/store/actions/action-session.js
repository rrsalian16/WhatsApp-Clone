import ACTIONS from '../actions-names';

import { auth, provider } from "../../firebase";

import { ActionRouteNavigate } from "./action-route";
import ROUTES from '../../configs/routes';

const { SESSION_ACTIONS } = ACTIONS;

export function ActionSessionStart() {
    return (dispatch) => {

        var data = {};

        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                console.log(result.additionalUserInfo.isNewUser);
                console.log(result.user.uid);
                console.log(result.user.email);
                console.log(result.user.displayName);
                console.log(result.user.photoURL);

                // If new user create entry into DB

                //Route to Login Page

                console.log(data);
                data = {
                    "success": true,
                }
                console.log(data);

                dispatch({ type: SESSION_ACTIONS.START, data: data })
                dispatch(ActionRouteNavigate(ROUTES.SAMPLE))
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

export function ActionSessionClear(res) {

    return (dispatch) => {
        dispatch({ type: SESSION_ACTIONS.CLEAR })
        dispatch(ActionRouteNavigate(ROUTES.LOGIN))
    }
}

export function ActionUpdateSession(data) {

    return (dispatch) => {
        dispatch({
            type: SESSION_ACTIONS.UPDATE,
            data
        })
    }
}