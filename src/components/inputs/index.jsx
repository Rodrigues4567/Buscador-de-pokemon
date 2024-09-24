import styles from "./inputs.module.css"

function Inputs({ referencia, onClicka }) {
    return (
        <>
            <h1 className={styles.title}>Qual seu Pokemon?</h1>
            <div className={styles.inputs_container}>
                <input className={styles.input} ref={referencia} type="text" placeholder='Nome do Pokemon' />
                <button className={styles.button} onClick={onClicka}>Buscar</button>
            </div>
        </>
    )
}

export default Inputs
