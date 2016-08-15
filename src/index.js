import 'babel-polyfill'
import React from 'react'
import { StyleRoot } from 'radium'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'



import App from './components/App'
import reducers from './reducers/index'

const initialState = window.__INITIAL_STATE__

const store = createStore(
  reducers, 
  initialState,
  window.devToolsExtension && window.devToolsExtension()
)

syncHistoryWithStore(
  browserHistory,
  store
)

render(
  <StyleRoot>
    <Provider store={store}>
      <App />
    </Provider>
  </StyleRoot>, 
  document.getElementById('root')
)

module.hot.accept()