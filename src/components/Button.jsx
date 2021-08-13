import React from 'react'

class Button extends React.Component {
    state = {
        count: 0,
    }
    handleClick = () => {
        //elemento q va a actualizar nuestro estado
        this.setState({
            count: this.state.count + 1,
        })
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <h1>Manzanas: {count}</h1>
                <button type="button" onClick={this.handleClick}>
                    Agregar
                </button>
            </div>
        )
    }
}

export default Button