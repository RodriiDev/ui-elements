import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    // Estado para controlar la visibilidad del sidebar
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    console.log(isSidebarVisible);

    const toggleSidebar = (event) => {
        setSidebarVisible(!isSidebarVisible);
    }

  return (
    <div>
        <button className="btn btn-default d-md-none" id="sidebar-toggler" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
        </button>

        <nav id="sidebar" className={`bg-light border-right p-3 ${isSidebarVisible ? 'd-block' : 'd-none d-md-block'}`}>
            <h4 className="outfit fw-500">UI Elements</h4>
            <ul className="nav flex-column">
                <li className="nav-item mt-4">
                    <Link to="/" className="outfit fw-400 without-deco">Inicio</Link>
                </li>
                <li className="nav-item mt-2">
                    <Link to="/elementos" className="outfit fw-400 without-deco">Elementos</Link>
                </li>
                <li className="nav-item mt-2">
                    <Link to="/recursos" className="outfit fw-400 without-deco">Recursos</Link>
                </li>
                <li className="nav-item mt-2">
                    <Link to="/ayuda" className="outfit fw-400 without-deco">Ayuda</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar
