// import { useState } from 'react'
import React from 'react'
import './AdicionarReceita.css'

const AdicionarReceita  = () => (
// const [valor, setValor] = useState([]);
// const [data, setData] = useState([]);
// const [descricao, setDescricao] = useState("");

        <>
          <div className='formulario'>
            
              <form onSubmit={''}>
              <div className='form-grupo'>
                <label for='valor'>Valor</label>
                <input type="text" name="valor" id="valor" />
                <label for='valor'>Data</label>
                <input type="text" name="valor" id="valor" />
              </div>
              <div className='botao'>
                <button className='btnSalvar'type="submit">Salvar</button>              
              </div>
              </form>
           </div>
        </>
     
);

export default AdicionarReceita;