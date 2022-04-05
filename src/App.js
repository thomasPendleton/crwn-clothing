import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.componenet.jsx'
import Navigation from './routes/navigation/navigation.component.jsx'
import SignIn from './routes/sign-in/sign-in.component.jsx'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
