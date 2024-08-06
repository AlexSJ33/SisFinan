import styles from './styles.module.css'

import MinhasTransacoes from '../Transacoes';
import Display from '../Display';
import { dados } from '../../data'
import Content from '../Content';


const Home = () => {

  let receita = 0
  let despesa = 0
  dados.map((d) => {
    if(d.transacao === 'despesa')
      despesa =despesa + parseFloat(d.preco)
    if(d.transacao === 'receita')
      receita = receita + parseFloat(d.preco)
    
  })
  let saldo = receita - despesa
  

  return (
    <>
    <div className={styles.container}>
      <Display saldo = {saldo.toFixed(2)} despesa = {despesa.toFixed(2)} receita = {receita.toFixed(2)}/>

      
        <div className={styles.item2}>
          <Content />       
   
        </div>
        <div className={styles.item3}>Item3</div>
        <div className={styles.item4}>
        <MinhasTransacoes />
        </div>
        <div className={styles.item5}>Item5</div>
        <div className={styles.item4} />
        
    </div>
    
    </>
  )
}

export default Home