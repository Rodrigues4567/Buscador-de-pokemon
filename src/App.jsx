import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import PokemonSection from './components/pokemon-section'

function App() {

  const inputRef = useRef()
  const [showPokemon, setShowPokemon] = useState()

  async function pokemon() {
    const valorInput = inputRef.current.value

    const url = `https://pokeapi.co/api/v2/pokemon/${valorInput}`

    if (!valorInput) {
      alert('Digite um input válido!')
      return
    }

    try {
      const res = await axios.get(url)
      console.log(res.data)
      setShowPokemon(() => res.data)
    }
    catch (erro) {
      console.log(erro)
    }
  }

  return (
    <div>
      <h1>Qual seu Pokemon?</h1>
      <input ref={inputRef} type="text" placeholder='Nome do Pokemon' />
      <button onClick={pokemon}>Buscar</button>

      {showPokemon && <PokemonSection selected_pokemon={showPokemon} />}
    </div>
  )
}

export default App
