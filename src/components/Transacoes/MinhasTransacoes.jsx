import styles from './MinhasTransacoes.module.css'
import { dados } from '../../data'
import Display from '../Display/Display'


const MinhasTransacoes =(props) => {

  props.preco

    return (
        <>
          <div className={styles.displayTransation}>
            <h2>Minhas transações</h2>
            {dados.map((transacao) => (

                <div className={styles.itens} key={transacao.id}>
                  <ul className={styles.lista}>
                  <li>
                    <p>
                      <b>{transacao.titulo}</b>
                      {transacao.preco}
                    </p>
                    <p>{transacao.categoria}</p>
                  </li>                  
                  </ul>
                </div>
              )
            )}
          </div>
        </>

    )
}
export default MinhasTransacoes