import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routers/AppRouter.jsx'
import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
