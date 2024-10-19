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
            <h3 className="outfit fw-500">UI Elements</h3>
            <ul className="nav flex-column">
                <li className="nav-item mt-4">
                    <Link to="/" className="outfit fw-400 without-deco"><i className="bi bi-house-door"></i><label className="ms-3 lbl-menu">Inicio</label></Link>
                </li>
                <li className="nav-item mt-3">
                    <Link to="/elementos" className="outfit fw-400 without-deco"><i className="bi bi-grid-fill"></i><label className="ms-3 lbl-menu">Elementos</label></Link>
                </li>
                <li className="nav-item mt-3">
                    <Link to="/recursos" className="outfit fw-400 without-deco"><i className="bi bi-puzzle"></i><label className="ms-3 lbl-menu">Recursos</label></Link>
                </li>
                <li className="nav-item mt-3">
                    <Link to="/ayuda" className="outfit fw-400 without-deco"><i className="bi bi-info-circle"></i><label className="ms-3 lbl-menu">Ayuda</label></Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar
