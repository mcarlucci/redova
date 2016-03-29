// libs
import BabelPolyfill from "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import Reflux from 'reflux'
import FastClick from 'fastclick'

// routes
import App from './routes/app'
import Home from './routes/home'

let routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
)

let app = {
    initialize() {
        this.bindEvents();
    },
    bindEvents() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady() {
      console.log('PLATFORM IS ', device.platform)
      new FastClick(document.body)
      ReactDOM.render(routes, document.getElementById('main'))
    }
}

app.initialize()
