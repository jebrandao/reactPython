import { Outlet } from 'react-router-dom'
import Header from './components/Header'

// Layout fixo: o Header aparece em todas as páginas; o <Outlet /> troca conforme a rota.
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
