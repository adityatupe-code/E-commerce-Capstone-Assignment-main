import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import reduxstore from './redux/reduxstore.js'
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={reduxstore}>

  <React.StrictMode>
    <App />
    
  </React.StrictMode>
  </Provider>
)
