import React from 'react'
import './Elementos.css'

const Home = () => {
  return (
    <div className="container">
        <div className="card mt-5">
            <div className="card-header">
                <label className="outfit fw-400">Últimos elementos agregados</label>
            </div>
            <div className="card-body">
                <div className="card cardStyle me-3 mb-3">
                    <div className="card-title">
                        <label className="outfit fw-400 d-block text-end me-5">CSS</label>
                    </div>
                    <div className="card-body text-center">
                        <button className="cardElement" id="btn2-css">Button</button>
                        <label className="outfit fw-400 d-block mt-2">Botón click</label>
                    </div>
                </div>

                <div className="card cardStyle me-3 mb-3">
                    <div className="card-title">
                        <label className="outfit fw-400 d-block text-end me-5">CSS</label>
                    </div>
                    <div className="card-body text-center">
                        <button className="cardElement" id="btn1-css"><i className="bi bi-cart"></i> Button</button>
                        <label className="outfit fw-400 d-block mt-2">Botón con icono</label>
                    </div>
                </div>

                <div className="card cardStyle me-3 mb-3">
                    <div className="card-title">
                        <label className="outfit fw-400 d-block text-end me-5">Bootstrap</label>
                    </div>
                    <div className="card-body text-center">
                        <button className="cardElement btn btn-lg btn-success">Button</button>
                        <label className="outfit fw-400 d-block mt-2">Botón success</label>
                    </div>
                </div>

                <div className="card cardStyle me-3 mb-3">
                    <div className="card-title">
                        <label className="outfit fw-400 d-block text-end me-5">Bootstrap</label>
                    </div>
                    <div className="card-body text-center">
                        <button className="cardElement btn btn-lg btn-outline-warning">Button</button>
                        <label className="outfit fw-400 d-block mt-2">Botón outline</label>
                    </div>
                </div>

            </div>
        </div>

        <div className="card mt-5">
            <div className="card-header">
                <label className="outfit fw-400">Últimos recursos agregados</label>
            </div>
            <div className="card-body">
                <label>Aqui van los recursos</label>
            </div>
        </div>

    </div>
  )
}

export default Home

