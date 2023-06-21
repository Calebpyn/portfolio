import './App.css'
import Bg from './components/Bg'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Bg/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
