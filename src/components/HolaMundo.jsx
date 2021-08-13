import React from 'react'
import imgreact from '../img/react.png'

const HolaMundo = () =>{
    const Hello = 'Hola mundo Daniel'
    const isTrue = true
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso escencial de React</h2>
            <img src={imgreact} />
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>este es falso</h5> }
            {isTrue && <h4>Soy verdadero</h4> }
        </div>
    )
}

export default HolaMundo
