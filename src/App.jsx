import './App.css'
import { Header } from './Header.jsx'
import { Tabs } from './Tabs.jsx'
import { Comparison } from './Comparison.jsx'
import { Filter } from "./Filter"
import { ProductCard } from './ProductCard.jsx'


function App() {

  return (
    <>
      <Header />
      <Tabs />
      <Comparison />
    </>
  )
}

export default App
