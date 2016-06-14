import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config'
import Express from 'express'
import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import reducer from './src/reducers/index'
import App from './src/components/App'
import getMuscles from './src/api/muscleGroups'

/*
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')*/

var app = new Express()
var port = 8080

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

/*
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})*/


app.use(handleRender)

function handleRender(req, res){

  getMuscles( muscleGroups => {
    let initialState = { muscleGroups }
    const store = createStore(reducer, initialState)

    const html = renderToString(
      <Provider store={store}>
        <App radiumConfig={{userAgent: req.headers['user-agent']}} />
      </Provider>
    )

    const finalState = store.getState()

    res.send(renderFullPage(html,finalState))
  })
  
}

function renderFullPage(html, initialState){
  return `
    <!doctype html>
    <html>
      <head>
        <title>Exercise App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
