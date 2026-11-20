import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Pega a <div id="root"> do index.html e desenha o componente App dentro dela.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
