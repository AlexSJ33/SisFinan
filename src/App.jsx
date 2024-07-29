import { useEffect, useState } from "react"
import  Home from "./components/Home"

function App() {

  const [receita, setReceita] = useState('')

  useEffect(() => {
    setReceita('teste')

  })

  return (
    <>
    <Home receita={receita}/>
    
    </>
  )
}

export default App
