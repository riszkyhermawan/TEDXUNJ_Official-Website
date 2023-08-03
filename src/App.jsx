import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import TicketPage from  './pages/TicketPage'
import GrandThemePage from './pages/GrandThemePage'
import SponsorshipPage from './pages/SponsorshipPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element= {<Homepage />}></Route>
          <Route path='/ticket' element= {<TicketPage />}></Route>
          <Route path='/grandtheme' element= {<GrandThemePage />}></Route>
          <Route path='/sponsorship' element= {<SponsorshipPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
