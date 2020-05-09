import React, { Component } from 'react'

export class Review extends Component {
    render() {
        return (
            <div>
                <h3>Review Your Feedback</h3>
        <p>{JSON.stringify(this.props.reduxState)}</p>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({reduxState});
export default Review
