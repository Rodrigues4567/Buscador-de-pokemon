import styles from './pokemon-section.module.css'

function PokemonSection({ selected_pokemon }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={selected_pokemon.sprites.front_default} />
                </div>

                <div className={styles.pokemon_status}>
                    <div className={styles.pokemon_name}>
                        <h2>Nome:</h2>
                        <p>{selected_pokemon.name}</p>
                    </div>

                    <div className={styles.pokemon_type}>
                        <h2>Tipo:</h2>
                        <p>{selected_pokemon.types[0].type.name}</p>
                        {selected_pokemon.types[1] && <p>{selected_pokemon.types[1].type.name}</p>}
                    </div>
                    
                    <div className={styles.pokemon_abilities}>
                        <h2>Habilidades:</h2>
                        <p>{selected_pokemon.abilities[0].ability.name}</p>
                        {selected_pokemon.abilities[1] && <p>{selected_pokemon.abilities[1].ability.name}</p>}
                        {selected_pokemon.abilities[2] && <p>{selected_pokemon.abilities[2].ability.name}</p>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PokemonSection
