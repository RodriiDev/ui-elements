import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Sidebar from './components/Sidebar.jsx';
import Home from './components/Home.jsx';
import Elementos from './components/Elementos.jsx';
import Recursos from './components/Recursos.jsx';


function App() {
  return (
    <Router>
      <div className="App">

        {/* Menú lateral */}
        <Sidebar />

        {/* Contenido principal */}
        <div id="main-content" className="container-fluid">
              <div className="row text-center">
                  <div className="col-12">
                      <h2 className="outfit fw-500 mt-3">Librería de elementos UI y recursos para tu web</h2>
                      <h4 className="outfit fw-300 mt-1">Hechos con CSS, Bootstrap y Tailwind</h4>
                  </div>
              </div>
              <div className="row">
                        <div className="col-12">
                            <Routes>
                                <Route path="/" element={ <Home /> } />
                                <Route path="/elementos"  element={ <Elementos /> }/>
                                <Route path="/recursos" element={ <Recursos /> } />
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
