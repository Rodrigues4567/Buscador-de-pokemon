import styles from './pokemon-section.module.css'

function PokemonSection({ selected_pokemon }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={selected_pokemon.sprites.front_default} />
                </div>

                <div className={styles.pokemon_status}>
                    <p>Nome:</p>
                    <h3>{selected_pokemon.name}</h3>
                    <p>Tipo:</p>
                    <h3>{selected_pokemon.types[0].type.name}</h3>
                    {selected_pokemon.types[1] && <h3>{selected_pokemon.types[1].type.name}</h3>}
                </div>
                
                <p>Habilidades:</p>
                <ul>
                    <li>{selected_pokemon.abilities[0].ability.name}</li>
                    {selected_pokemon.abilities[1] && <li>{selected_pokemon.abilities[1].ability.name}</li>}
                    {selected_pokemon.abilities[2] && <li>{selected_pokemon.abilities[2].ability.name}</li>}
                </ul>
            </div>
        </>
    )
}

export default PokemonSection
