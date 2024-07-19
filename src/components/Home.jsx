import { useState } from 'react';
import styles from './Home.module.css'
import AdicionarReceita from './Receita/AdicionarReceita'
import AdicionarDespesa from './Despesa/AdicionarDespesa';
import MinhasTransacoes from './Transacoes/MinhasTransacoes';



function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [addDespesas, setAddDespesas] = useState(false)

  return (
    <>
    <div className={styles.container}>
        <div className={styles.item1}>
          <div className={styles.display}>
            <div className={styles.saldo}>
              <h2>Saldo</h2>
              <p>9999,99</p>
            </div>
            <div className={styles.receita}>
              <h2>Receita</h2>
              <p>9999,99</p>
            </div>
            <div className={styles.despesa}>
              <h2>Despesa</h2>
              <p>9999,99</p>
            </div>
          </div>
        </div>
        <div className={styles.item2}>
          <div className={styles.user}>
            <img src="../src/assets/user2.svg" alt="perfil" />
          </div>
          <div className={styles.botoes}>
            <button className={styles.btnReceita} onClick={setOpenModal}>Nova Receita</button>
            <button className={styles.btnDespesa}onClick={setAddDespesas}>Nova Despesa</button>
          </div>
        </div>
        <div className={styles.item3}>Item3</div>
        <div className={styles.item4}>
        <MinhasTransacoes />
        </div>
        <div className={styles.item5}>Item5</div>
        <div className={styles.item4} />
        <AdicionarReceita isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
        <AdicionarDespesa isOpen={addDespesas} setDespesasAdd={() => setAddDespesas(!addDespesas)}/>
        
    </div>
    <div className={styles.item6}>Item6</div>
    </>
  )
}

export default Home