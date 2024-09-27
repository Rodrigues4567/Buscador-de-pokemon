import { useRef, useState } from 'react'
import './App.css'
import api from './services/api'
import PokemonSection from './components/pokemon-section'
import Inputs from './components/inputs'

function App() {

  const inputRef = useRef()
  const [showPokemon, setShowPokemon] = useState()

  async function pokemon() {
    const valorInput = inputRef.current.value.toLowerCase()

    if (!valorInput) {
      alert('Digite um nome válido!')
      return
    }

    try {
      const res = await api.get(`pokemon/${valorInput}/`)
      console.log(res.data)
      console.log(res.data.abilities)
      setShowPokemon(() => res.data)
    }
    catch (erro) {
      alert('Pokemon não encontrado!')
      console.log(erro)
    }
  }

  return (
    <div>
      <Inputs referencia={inputRef} onClicka={pokemon} />
      {showPokemon && <PokemonSection selected_pokemon={showPokemon} />}
    </div>
  )
}

export default App
