import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ContentArea from './components/ContentArea'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <ContentArea activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  )
}

export default App
