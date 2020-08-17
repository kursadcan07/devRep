import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

{/*
    Here the reactDOM element and its definition by Id "root" that given in html tag in index.html .
    This <App> component containts whole parts of programm.
*/}

ReactDOM.render(<App/>,document.getElementById("root"))
