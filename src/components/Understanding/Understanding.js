import React, { Component } from 'react'

export class Understanding extends Component {
    state={
        understanding: ''
    }
    handleChange=(e)=>{
        console.log('in understanding', e.target.value);
        this.setState({
            understanding: e.target.value
        })
    
        
    }
    
    handleClick = () =>{
        if(this.state.understanding  < 0 || this.state.understanding > 5 || this.state.understanding == ''){
            alert('please choose a number 1-5')
            
        }else{
            this.props.dispatch({
                type: 'understanding',
                payload: this.state.understanding
            })
            this.props.history.push('/support')
        }
    
    }
    render() {
        return (
            <div>
                <h3>How well are you understanding the content?</h3>
                <p>Understanding?</p>
                    <input type="number" onChange={this.handleChange}/> <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}

export default Understanding
