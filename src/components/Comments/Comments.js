import React, { Component } from 'react'

export class Comments extends Component {
    state ={
        comment: ''
    }
    handleChange=(event)=>{
        console.log('comments', event.target.value);
        this.setState({
            comment: event.target.value
        })
        
    }
    handleClick = () =>{

        this.props.dispatch({
            type: 'comments',
            payload: this.state.comment
        })
        this.props.history.push('/review')
    }
    render() {
        return (
            <div>
                <h3>Any comments you want to leave?</h3>
                <p>Comments</p>
                    <input type="text" onChange={this.handleChange}/><button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}

export default Comments
