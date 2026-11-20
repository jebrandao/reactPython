import { Outlet } from 'react-router-dom'
import Header from './components/Header'

// Layout comum a todas as páginas: o Header fica fixo e o <Outlet /> troca de acordo com a rota.
export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
