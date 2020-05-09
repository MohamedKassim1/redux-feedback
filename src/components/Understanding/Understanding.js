import React, { Component } from 'react'

export class Understanding extends Component {
    handleClick = () =>{
        this.props.history.push('/support')
    }
    render() {
        return (
            <div>
                <h3>How well are you understanding the content?</h3>
                <p>Understanding?</p>
                    <input type="number"/> <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}

export default Understanding
