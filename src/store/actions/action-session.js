import ACTIONS from '../actions-names';

import db, { auth, provider } from "../../firebase";

import { ActionRouteNavigate } from "./action-route";
import ROUTES from '../../configs/routes';

const { SESSION_ACTIONS } = ACTIONS;

export function ActionSessionStart() {
    return (dispatch) => {

        var data = {};

        auth
            .signInWithPopup(provider)
            .then((result) => {
                // If new user create entry into DB
                if (result.additionalUserInfo.isNewUser) {
                    db.collection("WhatsApp-User").doc(result.user.uid).set({
                        createdAt: new Date(),
                        uid: result.user.uid,
                        email: result.user.email,
                        name: result.user.displayName,
                        profilePic: result.user.photoURL
                    });
                }


                //Route to Login Page
                data = {
                    success: true,
                    uid: result.user.uid,
                    email: result.user.email,
                    name: result.user.displayName,
                    profilePic: result.user.photoURL
                }
                dispatch({ type: SESSION_ACTIONS.START, data: data })
                dispatch(ActionRouteNavigate(ROUTES.SAMPLE))
            })
            .catch((error) => {
                console.log(error);
                dispatch(ActionSessionClear());
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