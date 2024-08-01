import styles from './styles.module.css'
import { dados } from '../../data'





const MinhasTransacoes =() => {


    return (
        <>
          <div className={styles.displayTransation}>
            <h2>Minhas transações</h2>
            <hr />

            <div className={styles.divpai}>
            {dados.map((d) => (
              
              <div className={styles.itens} key={d.id}>
                <ul className={styles.lista}>
                <li>
                  <p>
                    <b>{d.titulo}</b>
                    {d.transacao === 'despesa' ? (
                      <><span style={{color:'red'}}>R$ -{d.preco}</span></> 
                    ): (
                      <><span style={{color:'green'}}>R$ {d.preco}</span></>
                    )}
                  </p>
                  <p>{d.categoria}</p>
                </li>                  
                </ul>
              </div>
            )
          )}
            </div>
          </div>
        </>

    )
}
export default MinhasTransacoes