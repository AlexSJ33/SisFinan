// import { useState } from 'react'
import React from 'react'
import './AdicionarReceita.css'

function AdicionarReceita({ isOpen, setModalOpen }) {
// const [valor, setValor] = useState([]);
// const [data, setData] = useState([]);
// const [descricao, setDescricao] = useState("");
  if (isOpen) {
    return(
    <>
      <div className='formulario'>
          <form onSubmit={''}>
            <div className='fechar' onClick={setModalOpen}>X</div>
          <div className='form-grupo'>
            <p>Nova Receita</p>
            <hr />
            <label for='valor'>Valor</label>
            <input type="text" name="valor" id="valor" />
            <label for='valor'>Data</label>
            <input type="text" name="valor" id="valor" />
          </div>
          <div className='botao'>
            <button className='btnSalvar'type="submit">Salvar</button>              
            <button className='btnSalvar'type="submit" onClick={setModalOpen}>Cancelar</button>     
          </div>
          </form>
       </div>
    </>
    )
  }
  return null
     
};

export default AdicionarReceita;