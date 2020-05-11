import React from "react";
import { render } from "react-dom";
import App from "./Pages/App";
import "../public/assets/styles/index.scss";
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import reducer from './Redux/Reducer/index'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer)


render(<App />, document.getElementById("app"));
