import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger"
import userLoginReducer from "./reducers/userLoginReducer";
import permissionReducer from "./reducers/permissionReducer";

export default createStore(combineReducers({userLoginReducer,permissionReducer}), applyMiddleware(logger));
