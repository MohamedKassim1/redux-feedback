import React, { Component } from 'react'

export class Feelings extends Component {
    handleClick = () =>{
        console.log(this.props);
        this.props.history.push('/understanding')
    }
    render() {
        return (
            <div>
                <h3>How are you feeling today?</h3>
                <p>Feelings?</p>
                <input type="number" /> <button onClick={this.handleClick}>NEXT</button>

            </div>

        )
    }
}

export default Feelings
