import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Sidebar from './components/Sidebar.jsx';
import Home from './components/Home.jsx';
import Elementos from './components/Elementos.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <div id="main-content" className="container-fluid">
              <div className="row">
                  <div className="col-12">
                      <h1>Bienvenido</h1>
                      <p>UI Elements con CSS, Bootstrap y Tailwind</p>
                  </div>
              </div>
              <div className="row">
                        <div className="col-12">
                            <Routes>
                                <Route path="/" element={ <Home /> } />
                                <Route path="/elementos"  element={ <Elementos /> }/>
                                <Route path="/settings"  />
                                <Route path="/help" />
                            </Routes>
                        </div>
                    </div>
          </div>

          </div>
    </Router>
  )
}

export default App
