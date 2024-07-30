import { useState } from 'react';
import styles from './styles.module.css'
import AdicionarReceita from '../Receita'
import AdicionarDespesa from '../Despesa';
import MinhasTransacoes from '../Transacoes';
import Display from '../Display';
import { dados } from '../../data'


const Home = () => {
  
  const [activeComponent, setActiveComponent] = useState(null);

  const showComponentA = () => {
    if (activeComponent === null) {
      setActiveComponent('A');
    }
  };

  const showComponentB = () => {
    if (activeComponent === null) {
      setActiveComponent('B');
    }
  };

  const closeComponent = () => {
    setActiveComponent(null);
  };

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
          <div className={styles.user}>
            <img src="../src/assets/user2.svg" alt="perfil" />
          </div>
          <div className={styles.botoes}>
            <button className={styles.btnReceita} onClick={showComponentA} disabled={activeComponent === 'B'}>Nova Receita</button>
            <button className={styles.btnDespesa} onClick={showComponentB} disabled={activeComponent === 'A'}>Nova Despesa</button>

            {activeComponent  === 'A' && (
              <div>
                <AdicionarReceita onClose={closeComponent} />
              </div>
              
            )}
            {activeComponent === 'B' && (
              <div>
                <AdicionarDespesa onClose={closeComponent} />
              </div>
            )}
          </div>
        </div>
        <div className={styles.item3}>Item3</div>
        <div className={styles.item4}>
        <MinhasTransacoes />
        </div>
        <div className={styles.item5}>Item5</div>
        <div className={styles.item4} />
        
    </div>
    <div className={styles.item6}>Item6</div>
    </>
  )
}

export default Home