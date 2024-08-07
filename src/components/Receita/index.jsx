// import { useState } from 'react'
import styles from './styles.module.css'


const AdicionarReceita = ({ onClose }) => {
// const [valor, setValor] = useState([]);
// const [data, setData] = useState([]);
// const [descricao, setDescricao] = useState("");


    return(
    <>
      <div className={styles.container}>
          <form onSubmit={null}>
            <div className={styles.fechar}>
              <div className={styles.left}>
              <button className={styles.btnFechar} onClick={onClose}> X</button>
              <label>Adicionar receita</label>
              </div>
              <div>
              <button className={styles.btnSalvar}type="submit">SALVAR</button>                
              </div>
            </div>

            <div className={styles.inputs}>
              <input className={styles.inputValue} type="text" name="valor" id="valor" placeholder='R$ 0' />
              <input className={styles.inputDescricao} type="text" name="descricao" id="descricao" placeholder='Descrição' />
              <input className={styles.inputCategoria} type="text" name="categoria" id="categoria" placeholder='Selecione a categoria' />
              
              <select defaultValue="" className={styles.inputConta}>
                <option disabled={true} value="">Conta</option>
                <option value="carteira">Carteira</option>
                <option value="nubank">Nubank</option>
                <option value="bradesco">Bradesco</option>
              </select>
            </div>
          </form>
      </div>
    </>
    )
  }
export default AdicionarReceita
