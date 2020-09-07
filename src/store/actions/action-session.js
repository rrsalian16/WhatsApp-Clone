import ACTIONS from '../actions-names';

import { ActionRouteNavigate } from "./action-route";
import ROUTES from '../../configs/routes';

const { SESSION_ACTIONS } = ACTIONS;

export function ActionSessionStart(res) {
    return (dispatch) => {
        let data = {};
        data = {
            ...res,
        }

        dispatch({ type: SESSION_ACTIONS.START, data: data })
        dispatch(ActionRouteNavigate(ROUTES.SAMPLE))
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