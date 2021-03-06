import React, { Component } from 'react'

export class Success extends Component {
    handleClick = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Thank you!</h1>

                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        )
    }
}

export default Success
