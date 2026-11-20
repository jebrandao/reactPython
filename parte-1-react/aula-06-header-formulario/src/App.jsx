import Formulario from './components/Formulario'
import Header from './components/Header'

function App() {
  // Há mais de um componente: o fragmento <> </> serve como "tag única" que envolve todos.
  return (
    <>
      <Header />
      <Formulario />
    </>
  )
}

export default App
