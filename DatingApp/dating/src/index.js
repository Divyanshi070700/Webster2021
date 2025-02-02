import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, compose, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/auth';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
const composeEnhances=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhances(
  applyMiddleware(thunk)
))

const app=(
<Provider store={store}>
<App/>
</Provider>

)


ReactDOM.render(
  app,document.getElementById('root')
);

reportWebVitals();
