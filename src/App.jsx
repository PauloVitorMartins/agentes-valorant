import { useState } from 'react'
import SelectAgent from './components/SelectAgent'
import Header from './components/Header'
import imageOne from './img/background.png'
import arrowUp from './img/arrowUp.png'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [showAgents, setShowAgents] = useState(false)
  const agents = ['BRINSTONE', 'VIPER', 'PHOENIX', 'RAZE', 'JETT', 'KILLJOY', 'SAGE']

  const functionSelect = () => {
    if (showAgents === true) {
      setShowAgents (false)
    }
    if (showAgents === false) {
      setShowAgents(true)
    }
  }

  return (
    <>
    <Header />
    <p className='title-agent'>AGENTES</p>
    <img className='image-agents' src='https://i.imgur.com/1L8F2lR.jpg'/>
    <p className='title-team-meet'>// CONHEÇA A EQUIPE</p>
    <p className='text-intro'>Encontre mais formas de plantar a Spike e enfrentar<br/>seus inimigos com lutadores, estratégias e caçadores<br/> de todos os tipos.</p>
      <div className='wrapper'>
      {showAgents === true && <SelectAgent  agents={agents} />}
      <div onClick={functionSelect}className='select-btn'>
        <span>ESCOLHA UM AGENTE</span>
        {showAgents === true && <img className='arrowDown' src={arrowUp}/>}
        {showAgents === false && <img src={arrowUp}/>}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default App
