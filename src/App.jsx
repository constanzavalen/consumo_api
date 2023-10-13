import {useState } from 'react'
import './App.css'
import Buscador from './assets/components/Buscador'
import MiApi from './assets/components/MiApi'
import Boton from './assets/components/Boton'

const App = () => {
  
  const [criterio, setCriterio] = useState('')
  const [ordenAscendente, setOrdenAscendente] = useState(true)

  return (
    <div className="container">
      <h1>Buscador de temperaturas en Chile</h1>
       <Buscador criterio={criterio} setCriterio={setCriterio}/>
       <Boton ordenAscendente={ordenAscendente} setOrdenAscendente={setOrdenAscendente}/>
       <MiApi ordenAscendente={ordenAscendente} criterio={criterio}/>
    </div>
  )
}

export default App
