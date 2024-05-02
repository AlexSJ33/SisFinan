import './Home.css'
import AdicionarReceita from './Receita/AdicionarReceita';



function Home() {
  const handleSubmit = (e) =>{
    e.preventDefault();
    AdicionarReceita
  }
  return (
    <>
    <div className='container'>
        <div className='item1'>
          <div className='display saldo'>
            <h2>Saldo</h2>
            <p>9999,99</p>
          </div>
          <div className='display receita'>
            <h2>Receita</h2>
            <p>9999,99</p>
          </div>
          <div className='display despesa'>
            <h2>Despesa</h2>
            <p>9999,99</p>
          </div>
        </div>
        <div className='item2'>
          <div className='user'>
            <img src="../src/image/user2.svg" alt="perfil" />
          </div>
          <div className='botoes'>
            <button className='btnReceita' onClick={() => handleSubmit()}>Nova Receita</button>
            <button className='btnDespesa'>Nova Despesa</button>
          </div>
        </div>
        <div className='item3'>Tela1</div>
        <div className='item4'>
          <div className='displayTransation'>
            <h2>Minhas transações</h2>
            <hr />
          </div>
        </div>
        <div className='item5'>Tela3</div>
        
        <div className='item7'>Footer</div>
    </div>
    </>
  )
}

export default Home