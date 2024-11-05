import React from 'react'

const CardElement = ({tipo,elemento}) => {
  return (
    
    <div className="card cardStyle me-3 mb-3">
        <div className="card-title">
            <label className={ `outfit fw-400 d-block text-end me-5 ${tipo=='CSS' ? 'text-success' : 'text-primary'}` }>{tipo}</label>
        </div>
        <div className="card-body text-center">
            {elemento}
        </div>
    </div>
    
  )
}

export default CardElement