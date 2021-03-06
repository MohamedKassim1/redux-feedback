import React, { Component } from 'react'

export class Support extends Component {
    state={
        support: ''
    }
    handleChange=(e)=>{
        this.setState({
            support: e.target.value
        })
    }
    handleClick = () =>{
        if(this.state.support  < 0 || this.state.support > 5 || this.state.support == ''){
            alert('please choose a number 1-5')
            
        }else {
            this.props.dispatch({
                type: 'support',
                payload: this.state.support
            })
            this.props.history.push('/comments')
        }
     
    }
    render() {
        return (
            <div>
                <h3>How well are you being supported?</h3>
                <p>Support?</p>
                    <input type="number" onChange={this.handleChange}/> <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}

export default Support
