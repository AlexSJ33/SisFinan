// import { useState } from 'react'
import React from 'react'
import Modal from 'react-modal'

import styles from './AdicionarReceita.module.css'

// Código necessário para os recursos de acessibilidade
Modal.setAppElement('#root');


function AdicionarReceita({ isOpen, setModalOpen }) {
// const [valor, setValor] = useState([]);
// const [data, setData] = useState([]);
// const [descricao, setDescricao] = useState("");
  if (isOpen) {
    return(
    <>
      <div className={styles.formulario}>
          <form onSubmit={''}>
          <div className='form-grupo'>
              <div className={styles.fechar}>
                <div className={styles.left}>
                <button className={styles.btnFechar} onClick={setModalOpen}> X</button>
                <label>Adicionar transação</label>
                </div>
                <div>
                <button className={styles.btnSalvar}type="submit">Salvar</button>                
                </div>
              </div>

            <hr />
            <div className={styles.LabelValueDate}>

            </div>
            <div className={styles.LabelValueDate}>
              <input type="text" name="valor" id="valor" placeholder='R$ 0' />
            </div>
            <div className={styles.LabelValueDate}>
            <label for='valor'>Descrição</label>
            </div>
            <div className={styles.InputValueDate}>
            <input type="text" name="descricao" id="descricao" />
            </div>
          </div>
          
          
          </form>
       </div>
    </>
    )
  }
  return null
     
};

export default AdicionarReceita;