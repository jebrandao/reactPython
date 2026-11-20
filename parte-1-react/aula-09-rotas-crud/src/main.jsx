import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Formulario from './components/Formulario.jsx'
import Usuarios from './pages/Usuarios/Usuarios.jsx'

// Mapa do site: cada "path" (endereço) mostra um elemento. Os "children" aparecem no <Outlet /> do App.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Formulario /> },
      { path: '/usuarios', element: <Usuarios /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
