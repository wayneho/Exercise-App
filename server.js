import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config'
import Express from 'express'
import React from 'react'

import { StyleRoot } from 'radium'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'


import reducers from './src/reducers/index'
import App from './src/components/App'
import getMuscles from './src/api/muscleGroups'
import { BACK_MUSCLES } from './src/constants/MuscleGroups'


var app = new Express()
var port = process.env.PORT || 8080


var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


app.use(handleRender)

function handleRender(req, res){

  // control for favicon
  if(req.url === '/favicon.ico'){
    res.writeHead(200, {'Content-Type': 'image/x-icon'} )
    res.end()
    //console.log('favicon requested')
    return
  }


  getMuscles( muscleGroups => {

    let [_, muscle] = req.originalUrl.split('/')

    // fix muscles with spaces in their names
    muscle = muscle.split('%20').join(' ')

    const back = BACK_MUSCLES.some(backMuscle=>{
      return backMuscle === muscle
    })

    let initialState = { 
      muscleGroups, 
      showMuscleGroup: muscle?muscle:'/',
      diagramView: back?'back':'front'
    }

    const store = createStore(
      reducers, 
      initialState
    )

    const html = renderToString(
      <StyleRoot>
        <Provider store={store}>
          <App radiumConfig={{userAgent: req.headers['user-agent']}} />
        </Provider>
      </StyleRoot>
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
      <body style="width: 100%; background-color: #171717; color: #FFF" >
        <div id="root" style="max-width: 1200px; margin: 0 auto;">${html}</div>
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
