import Rodape from './components/Rodape'

// App é o componente principal: é aqui que "montamos o lego".
function App() {
  // Um componente retorna APENAS UM elemento raiz. Tudo o mais fica dentro dele.
  return (
    <div>
      <h1>Olá, React!</h1>
      <p>Este é o meu primeiro componente.</p>
      <ul>
        <li>Componentes são funções</li>
        <li>Começam com letra maiúscula</li>
        <li>Retornam JSX (um "HTML dentro do JavaScript")</li>
      </ul>
      <Rodape />
    </div>
  )
}

// Para usar o componente em outro arquivo, é preciso exportá-lo.
export default App
