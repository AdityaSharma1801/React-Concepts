import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import WeatherCard from './components/WeatherCard'
import Calculator from './components/Calculator'
import StopWatch from './components/StopWatch'

const App = () => {
  return (
  <Router>
    <div>
      <nav>
          <ul>
            <li>
              
            </li>
            <li></li>
            <li></li>
          </ul>
      </nav>
      <Routes>
          <Route path="/" element={<WeatherCard/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
          <Route path="/stopwatch" element={<StopWatch/>}></Route>


      </Routes>
    </div>
  </Router>


  )
}

export default App