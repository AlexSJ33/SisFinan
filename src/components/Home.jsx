import { useState } from 'react';
import styles from './Home.module.css'
import AdicionarReceita from './Receita/AdicionarReceita'
import AdicionarDespesa from './Despesa/AdicionarDespesa';



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
            <img src="../src/image/user2.svg" alt="perfil" />
          </div>
          <div className={styles.botoes}>
            <button className={styles.btnReceita} onClick={setOpenModal}>Nova Receita</button>
            <button className={styles.btnDespesa}onClick={setAddDespesas}>Nova Despesa</button>
          </div>
        </div>
        <div className={styles.item3}>Tela1</div>
        <div className={styles.item4}>
          <div className={styles.displayTransation}>
            <h2>Minhas transações</h2>
            <hr />
          </div>
        </div>
        <div className={styles.item5}>Tela3</div>
        
        <div className={styles.item7}>Footer</div>
        <AdicionarReceita isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
        <AdicionarDespesa isOpen={addDespesas} setDespesasAdd={() => setAddDespesas(!addDespesas)}/>
        
    </div>
    </>
  )
}

export default Home