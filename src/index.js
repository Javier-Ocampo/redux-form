import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { getMuiTheme } from 'material-ui/styles'

import store from './store'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1075b7',
    accent1Color: '#205571'
  }
})

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
