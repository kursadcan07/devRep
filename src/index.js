import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducers from "./reducers";
{/*
    This class takes <App/> component as a whole component of the program within <Provider/> component.
    That allows to reach whole redux states from everywhere.

    Store element created here to work with redux as well.


*/}

{/*
    This element includes enhancer parameter as well.This is a chrome extension that allows to
    programmer display states current values etc.Shorty,just an tool that makes easier to implement
    redux.

*/}

const myStore = createStore(allReducers
,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

{/*
    Here the reactDOM element and its definition by Id "root" that given in html tag in index.html .
*/}
ReactDOM.render(<Provider store={myStore}><App/></Provider>,document.getElementById("root"))
