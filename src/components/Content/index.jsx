import styles from './styles.module.css'
import { useState } from 'react';
import AdicionarReceita from '../Receita'
import AdicionarDespesa from '../Despesa';


const Content = () => {

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
        <div className={styles.content}>
            <div className={styles.user}>
            <img src="../src/assets/user2.svg" alt="perfil" />
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
        </div>
    )
}
export default Content