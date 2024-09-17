
function PokemonSection({ selected_pokemon }) {
    return (
        <>
            <div>
                <p>Nome:</p>
                <h3>{selected_pokemon.name}</h3>
                <p>Tipo:</p>
                <h3>{selected_pokemon.types[0].type.name}</h3>
            </div>
        </>
    )
}

export default PokemonSection
