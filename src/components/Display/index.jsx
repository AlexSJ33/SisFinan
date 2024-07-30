import styles from './styles.module.css'

const Display = (props) => {
    

    return (
        <>
        <div className={styles.item1}>
            <div className={styles.display}>
                <div className={styles.saldo}>
                    <h2>Saldo</h2>
                    <p>R$ {props.saldo}</p>
                </div>
                <div className={styles.receita}>
                    <h2>Receita</h2>
                    <p>R$ {props.receita}</p>
                </div>
                <div className={styles.despesa}>
                    <h2>Despesa</h2>
                    <p>R$ {props.despesa}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Display