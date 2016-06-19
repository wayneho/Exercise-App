import React from 'react'
import {StyleRoot} from 'radium'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers/index'

const initialState = window.__INITIAL_STATE__

const store = createStore(reducer, initialState,
  window.devToolsExtension && window.devToolsExtension()
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