// import { useState } from 'react'
import React from 'react'


import styles from './AdicionarReceita.module.css'




function AdicionarReceita({ isOpen, setModalOpen }) {
// const [valor, setValor] = useState([]);
// const [data, setData] = useState([]);
// const [descricao, setDescricao] = useState("");
  if (isOpen) {
    return(
    <>
      <div className={styles.container}>
          <form onSubmit={''}>
            <div className={styles.fechar}>
              <div className={styles.left}>
              <button className={styles.btnFechar} onClick={setModalOpen}> X</button>
              <label>Adicionar transação</label>
              </div>
              <div>
              <button className={styles.btnSalvar}type="submit">Salvar</button>                
              </div>
            </div>

            <div className={styles.inputs}>
              <input className={styles.inputValue} type="text" name="valor" id="valor" placeholder='R$ 0' />
              <input className={styles.inputCategoria} type="text" name="categoria" id="categoria" placeholder='Selecione a categoria' />
              <input className={styles.inputDescricao}type="text" name="descricao" id="descricao" />
            </div>
          </form>
      </div>
    </>
    )
  }
  return null
     
};

export default AdicionarReceita;