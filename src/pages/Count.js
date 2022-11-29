import React, { Component } from 'react'
export default class Count extends Component {

   
    increment=()=>{
        const {value} =this.selectNumber
    }
    decrement=()=>{
        const {value} =this.selectNumber
    }
    incrementIfOdd=()=>{
        const {value} =this.selectNumber
    }
    inrementAsync=()=>{
    }   
    componentDidMount(){
        console.log('selectNumber:',this.selectNumber);
    }
  render() {
    return (
      <div>
        <h1>当前求和:</h1>
        <select ref={c=>{this.selectNumber=c}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和奇数再加</button>
        <button onClick={this.inrementAsync}>异步加</button>
      </div>
    )
  }
}
