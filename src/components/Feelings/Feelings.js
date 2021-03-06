import React, { Component } from 'react'

export class Feelings extends Component {
    state={
        feeling: ''
    }
    handleChange =(event)=>{
        console.log('in handleChange', event.target.value)
        this.setState({
            feeling: event.target.value
          })
    }
    handleClick = () =>{
        console.log(this.props);
        if(this.state.feeling  < 0 || this.state.feeling > 5 || this.state.feeling == ''){
            alert('please choose a number 1-5')
            
        }else{
            this.props.dispatch({
                type: 'feelings',
                payload: this.state.feeling
            })
            console.log(this.props);
            this.props.history.push('/understanding')
        }
    }
    render() {
        return (
            <div>
                <h3>How are you feeling today?</h3>
                <p>Feelings?</p>
                <input type="number" onChange={this.handleChange}/> <button onClick={this.handleClick}>NEXT</button>

            </div>

        )
    }
}

export default Feelings
