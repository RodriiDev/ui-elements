import React from 'react'

const Home = () => {
  return (
    <div classNmae="container">
        <div className="card mt-5">
            <div className="card-header">
                <label className="outfit fw-400">Últimos elementos agregados</label>
            </div>
            <div className="card-body">
                <label>Aqui van los elementos</label>
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

