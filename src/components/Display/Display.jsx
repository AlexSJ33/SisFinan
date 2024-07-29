import styles from './Display.module.css'
import React from 'react'
import MinhasTransacoes from '../Transacoes/MinhasTransacoes'


const Display = ({ receita }) => {
    

    return (
        <>
        <div className={styles.item1}>
            <div className={styles.display}>
                <div className={styles.saldo}>
                    <h2>Saldo</h2>
                    <p>{receita}</p>
                </div>
                <div className={styles.receita}>
                    <h2>Receita</h2>
                    <p>{receita}</p>
                </div>
                <div className={styles.despesa}>
                    <h2>Despesa</h2>
                    <p>9999,99</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Display