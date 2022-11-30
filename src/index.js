import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/pages/Home'
import Details from './components/pages/Details'
import './App.css'

import 'typeface-roboto';
import * as serviceWorker from './serviceWorker'

import store from './store';

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(
  routing, 
  window.document.getElementById('root')
)

serviceWorker.unregister();
