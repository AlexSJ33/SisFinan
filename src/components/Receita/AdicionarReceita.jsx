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
      <div className={styles.formulario}>
          <form onSubmit={''}>
          <div className='form-grupo'>
              <div className={styles.fechar}>
                <p onClick={setModalOpen}> X</p>
              </div>
            <div className={styles.title}>
              <p>Nova Receita</p>
            </div>
            <hr />
            <div className={styles.LabelValueDate}>
            <label for='valor'>Valor</label>
            <label for='valor'>Data</label>
            </div>
            <div className={styles.InputValueDate}>
            <input type="text" name="valor" id="valor" />
            <input type="text" name="valor" id="valor" />
            </div>
            <div className={styles.LabelValueDate}>
            <label for='valor'>Descrição</label>
            </div>
            <div className={styles.InputValueDate}>
            <input type="text" name="descricao" id="descricao" />
            </div>
            <div className={styles.botao}>
              <button className={styles.btnSalvar}type="submit">Salvar</button>
              <button className={styles.btnSalvar}type="submit" onClick={setModalOpen}>Cancelar</button>     
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