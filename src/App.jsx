import { useRef, useState } from 'react'
import './App.css'
import api from './services/api'
import PokemonSection from './components/pokemon-section'

function App() {

  const inputRef = useRef()
  const [showPokemon, setShowPokemon] = useState()

  async function pokemon() {
    const valorInput = inputRef.current.value

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
      <h1>Qual seu Pokemon?</h1>
      <input ref={inputRef} type="text" placeholder='Nome do Pokemon' />
      <button onClick={pokemon}>Buscar</button>

      {showPokemon && <PokemonSection selected_pokemon={showPokemon} />}
    </div>
  )
}

export default App
