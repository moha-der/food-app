import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import "bootstrap/dist/css/bootstrap.css"
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store/store.jsx'
import { Provider } from 'react-redux'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
