import React, { Component } from 'react'

export default class RefDemo extends Component {
  showData =()=>{
    const {input1} = this.refs
    console.log("this:",this); // input1 整个节点
    console.log("input1:",input1.value); //input的value值
  }
  showData1=()=>{
    const {input2} =this.refs
    alert(input2.value)
  }
  render() {
    return (
      <div>
        <input  ref= "input1" type="text" placeholder='点击提示数据'></input>&nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
        <input onBlur={this.showData1} ref="input2" type="text" placeholder='失去焦点提示数据'></input>
      </div>
    )
  }
}
