import React from 'react'
import CardElement from './CardElement.jsx';

const Elementos = () => {
  const tipo1 = "CSS";
  const tipo2 = "Bootstrap";
  const elemento1 = <div><button className="cardElement" id="btn2-css">Button</button><label className="outfit fw-400 d-block mt-2">Botón click</label></div>;
  const elemento2 = <div><button className="cardElement" id="btn1-css"><i className="bi bi-cart"></i> Button</button><label className="outfit fw-400 d-block mt-2">Botón con icono</label></div>;
  const elemento3 = <div><button className="cardElement btn btn-lg btn-success">Button</button><label className="outfit fw-400 d-block mt-2">Botón success</label></div>;
  const elemento4 = <div><button className="cardElement btn btn-lg btn-outline-warning">Button</button><label className="outfit fw-400 d-block mt-2">Botón outline</label></div>;
  const elemento5 = <div><div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <label className="outfit fw-400 d-block mt-2">Dropdown</label>
                    </div>;
const elemento6 = <div><label className="switch"><input type="checkbox" /><span className="slider"></span></label><label className="outfit fw-400 d-block mt-2">Toogle</label></div>;
  
return (
    <div className="mt-5">
                <CardElement tipo={tipo1} elemento={elemento1}/>
                <CardElement tipo={tipo1} elemento={elemento2}/>
                <CardElement tipo={tipo2} elemento={elemento3}/>
                <CardElement tipo={tipo2} elemento={elemento4}/>
                <CardElement tipo={tipo2} elemento={elemento5}/>
                <CardElement tipo={tipo1} elemento={elemento6}/>
    </div>
  )
}

export default Elementos
