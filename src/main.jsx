import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { APIProvider } from './context/API.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </APIProvider>
  </React.StrictMode>,
)
