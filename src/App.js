import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.componenet.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
