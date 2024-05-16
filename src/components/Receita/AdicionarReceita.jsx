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
          <div className='form-grupo'>
              <div className='fechar'>
                <p onClick={setModalOpen}> X</p>
              </div>
            <div className='title'>
              <p>Nova Receita</p>
            </div>
            <hr />
            <div className='LabelValueDate'>
            <label for='valor'>Valor</label>
            <label for='valor'>Data</label>
            </div>
            <div className='InputValueDate'>
            <input type="text" name="valor" id="valor" />
            <input type="text" name="valor" id="valor" />
            </div>
            <div className='LabelValueDate'>
            <label for='valor'>Descrição</label>
            </div>
            <div className='InputValueDate'>
            <input type="text" name="descricao" id="descricao" />
            </div>
            <div className='botao'>
              <button className='btnSalvar'type="submit">Salvar</button>
              <button className='btnSalvar'type="submit" onClick={setModalOpen}>Cancelar</button>     
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