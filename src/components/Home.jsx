import './Home.css'

function Home() {
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
          <div>LOGO</div>
          <div className='botoes'>
            <button className='btnReceita'>Nova Receita</button>
            <button className='btnDespesa'>Nova Despesa</button>
          </div>
        </div>
        <div className='item3'>Tela1</div>
        <div className='item4'>Tela2</div>
        <div className='item5'>Tela3</div>
        
        <div className='item7'>Footer</div>
    </div>
    </>
  )
}

export default Home