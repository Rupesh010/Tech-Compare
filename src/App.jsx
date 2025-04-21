import './App.css'
import { Header } from './Header.jsx'
import { Tabs } from './Tabs.jsx'
import { TabSelect } from './TabSelect.jsx'
import { useState } from 'react'


function App() {

  const [selectedTab, setSelectedTab] = useState('Article')

  return (
    <>
      <Header />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabSelect selectedTab={selectedTab} />
    </>
  )
}

export default App
