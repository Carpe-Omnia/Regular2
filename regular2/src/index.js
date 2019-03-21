import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
//import $ from 'jquery'
//import * as actions from './actions/orientationActions'
//import {clickHash, hotkeyHash, navHash} from './utility/keybinding'
import {store, setup} from './utility/setup'

setup();
ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
