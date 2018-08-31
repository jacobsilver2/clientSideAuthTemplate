import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'; 
import reduxThunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//? ────────────────────────────────────────────────────────────────────────────────
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import reducers from './reducers/index';
//! ────────────────────────────────────────────────────────────────────────────────

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token')}
  },
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
  <App>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/feature" component={Feature} />
    <Route path="/signout" component={Signout} />
    <Route path="/signin" component={Signin} />
  </App>
</BrowserRouter>  
</Provider>  
, document.querySelector('#root'));
