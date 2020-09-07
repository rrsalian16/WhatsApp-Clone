import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";


import rSession from "./reducer-session";

export const RootReducer = (history) => (
    combineReducers({
        router: connectRouter(history),
        rSession,
    })
);
