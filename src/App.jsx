import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import TicketPage from  './pages/TicketPage'
import GrandThemePage from './pages/GrandThemePage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element= {<Homepage />}></Route>
          <Route path='/ticket' element= {<TicketPage />}></Route>
          <Route path='/grandtheme' element= {<GrandThemePage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
