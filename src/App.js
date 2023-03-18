import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './routes/Home'
import Box from './routes/Box'

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/box" element={<Box />}/>
    </Routes>
  </Router>
}

export default App;