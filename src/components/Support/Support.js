import React, { Component } from 'react'

export class Support extends Component {
    handleClick = () =>{
        this.props.history.push('/review')
    }
    render() {
        return (
            <div>
                <h3>How well are you being supported?</h3>
                <p>Support?</p>
                    <input type="number"/> <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}

export default Support
