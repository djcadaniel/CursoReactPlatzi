import React, {Component} from 'react';

class Stateful extends Component {
    //ce centra más en la lógica
    //estaran el ciclo de vida y estados
    constructor(props){
        super(props); //inicializamos las props
        this.state = {
            hello: 'Hola mundo'
        }
    }
    render(){
        return(
            <h1>{this.state.hello}</h1>
        )
    }
}

export default Stateful
