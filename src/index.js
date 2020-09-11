import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from "./store";


{/*
    Here the reactDOM element and its definition by Id "root" that given in html tag in index.html .
    This <App> component containts whole parts of programm.
*/
}

ReactDOM.render(<Provider store={store}>
    <App store={store}/>
</Provider>, document.getElementById("root"))
