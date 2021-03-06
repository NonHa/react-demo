import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NavGationBar from './components/navgetionBar'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import routes from './router'
import { BrowserRouter as Router } from 'react-router-dom'
import FlashMessagesList from './components/flash/flashMessagesList'
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={ store }>
    <Router routes={ routes }>
    <NavGationBar />
    <FlashMessagesList />
    { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
)
