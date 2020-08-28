import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger"
import userLoginReducer from "./reducers/userLoginReducer";
import permissionReducer from "./reducers/permissionReducer";
import thunk from "redux-thunk";

export default createStore(combineReducers({userLoginReducer,permissionReducer}), applyMiddleware(logger,thunk));
