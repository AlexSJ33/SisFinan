import styles from './MinhasTransacoes.module.css'
import { dados } from '../../data'


function MinhasTransacoes() {

    const listItems = dados.map(person =>
        
        <li key={person.id}>
            
          <p className={styles.lista_p}>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
          
        </li>
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