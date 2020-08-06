import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counteredReducers:counterReducer,
    isLoggedIn:loggedReducer
})
export default allReducers;
