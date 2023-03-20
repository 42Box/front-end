import {
  HashRouter as Router,
//  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './routes/Home'
import Box from './routes/Box'
import Token from './Token'

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/#/home" element={<Token />}/>
      <Route path="/#/box" element={<Box />}/>
    </Routes>
  </Router>
}

export default App;