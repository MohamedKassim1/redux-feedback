import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
class Review extends Component {


    handleSubmit = () => {
        console.log('in handleSubmit')
        axios.post('/submitReview', this.props.reduxState)
        .then(() => {
            console.log('in POST: ', this.props.reduxState);
        })
        .catch((error) => {
            console.log('error with POST: ', error);
            alert('Error with sending data. Please try again.')
        })
        this.props.history.push('/success')
    } //end handle click
  
    render() {
        return (
            <div>
                <h3>Review Your Feedback</h3>
                {JSON.stringify(this.props.reduxState)}
                <p>Feelings: {this.props.reduxState.feeling}</p>
                <p>Understanding: {this.props.reduxState.understanding}</p>
                <p>Support: {this.props.reduxState.support}</p>
                <p>Comments: {this.props.reduxState.comment}</p>
                <button onClick={this.handleSubmit}>SUBMIT</button>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });
export default connect(reduxStateToProps)(Review);
