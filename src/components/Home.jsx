import { useState } from 'react';
import styles from './Home.module.css'
import AdicionarReceita from './Receita/AdicionarReceita'
import AdicionarDespesa from './Despesa/AdicionarDespesa';
import MinhasTransacoes from './Transacoes/MinhasTransacoes';
import Display from './Display/Display';



function Home() {
  
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


  return (
    <>
    <div className={styles.container}>
      <Display />
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