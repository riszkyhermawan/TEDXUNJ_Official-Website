import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import TicketPage from  './pages/TicketPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element= {<Homepage />}></Route>
          <Route path='/ticket' element= {<TicketPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
