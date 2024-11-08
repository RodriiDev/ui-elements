import React from 'react'
import CardElement from './CardElement.jsx';

const Recursos = () => {
  const tipo1 = "CSS";
  const tipo2 = "Bootstrap";
  const recurso1 =  <div><input type="color" className="form-control form-control-color d-inline" id="myColor" value="#CCCCCC" title="Choose a color"></input>
                        <label className="outfit fw-400 d-block mt-2">Color picker</label>
                        </div>;
  
return (
    <div className="mt-5">
        <CardElement tipo={tipo2} elemento={recurso1}/>
    </div>
  )
}

export default Recursos
