import React, { Component } from 'react'

export default class RefBackDemo extends Component {
  showData =()=>{
    console.log(this.input1);
  }
  showData1=()=>{
  }
  render() {
    return (
      <div>
        <input  ref={c =>this.input1=c} type="text" placeholder='点击提示数据'></input>&nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
      </div>
    )
  }
}
