import { Button } from './Button'
import { Product } from './Products'

function App() {
  const textoBotoes = ['Botao 1', 'Botao 2', 'Botao 3', 'Botao 4', 'Botao 5']


  return (
    <div>
      <h1>Hello world</h1>

      {textoBotoes.map((texto) => {
        return <Button text={texto}/>
      })}

      <Product/>
    </div>
  )
}

export default App
