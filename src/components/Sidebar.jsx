import React, { useState } from 'react';
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
            <h4>Mi Sidebar</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Componentes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Recursos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ayuda</a>
                </li>
            </ul>
        </nav>

        <div id="contenidoPrinc" className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>Contenido Principal</h1>
                    <p>Este es el contenido principal de la página...</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
