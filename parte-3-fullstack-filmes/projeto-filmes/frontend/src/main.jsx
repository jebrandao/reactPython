import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Formulario from './components/Formulario.jsx'
import GerenciarFilmes from './pages/GerenciarFilmes.jsx'
import DetalhesFilme from './pages/DetalhesFilme.jsx'
import FilmesFiltrados from './pages/FilmesFiltrados.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/formulario',
        element: <Formulario btnName={'Adicionar filme'} />,
      },
      {
        path: '/gerenciar-filmes',
        element: <GerenciarFilmes />,
      },
      {
        path: '/filme/:id',
        element: <DetalhesFilme />,
      },
      {
        path: '/filmes-filtrados',
        element: <FilmesFiltrados />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
