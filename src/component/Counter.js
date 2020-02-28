import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component{

    state = {number : 0}

    handleIncrement = () =>{
      this.setState({
        number: this.state.number +1
      })
    }
  
    handleDecrement = () =>{
      this.setState({
        number: this.state.number -1
      })
    }

    render(){
        return(
            <>
            <h2>{this.state.number}</h2>
            <div>
              <button id='increment' onClick={this.handleIncrement}>+1</button>
              <button id='decrement' onClick={this.handleDecrement}>-1</button>
            </div>
            </>
        )
    }
}

export default Counter