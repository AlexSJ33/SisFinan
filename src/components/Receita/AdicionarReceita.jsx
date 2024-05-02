// import { useState } from 'react'
import './AdicionarReceita.css'

function AdicionarReceita() {
  // const [valor, setValor] = useState([]);
  // const [data, setData] = useState([]);
  // const [descricao, setDescricao] = useState("");

    return (
      <>
      <div className='container'>
          <div>
            <form onSubmit={''}>
              <div className='form-grupo'>
                <label for='valor'>Valor</label>
                <input type="text" name="valor" id="valor" />
              </div>
            
            </form>
          </div>
      </div>
      </>
    )
  }
  export default AdicionarReceita