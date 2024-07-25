import styles from './MinhasTransacoes.module.css'
import { dados } from '../../data'


function MinhasTransacoes() {

    const listItems = dados.map((transacao,index) => (
        <div className={styles.itens}>
        <li key={index}>
          <p>
            <b>{transacao.titulo}</b>
            {transacao.preco}
          </p>
          <p>{transacao.categoria}</p>
          
        </li>
        </div>
    )
      );

    return (
        <>
           <div className={styles.displayTransation}>
                <h2>Minhas transações</h2>
                <hr />
                <ul className={styles.lista}>{listItems}</ul>
                
          </div>
        </>

    )
}
export default MinhasTransacoes