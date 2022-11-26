import React, { Component } from 'react';
import './App.css';
import Apple from './component/Apple.js'
import Balala from './component/Balala.js'

function withMouse(WrappedComponent){
  class Mouse extends Component {
      state={
          x:0,
          y:0
      }
      handleMouseMove = e =>{
          this.setState({
              x:e.clientX,
              y:e.clientY
          })
      }
      componentDidMount(){
          window.addEventListener('mousemove',this.handleMouseMove)
      }
      componentWillUnmount(){
          window.removeEventListener('mousemove',this.handleMouseMove)
      }
      render() {
        return <WrappedComponent {...this.state}></WrappedComponent>
      }
  }
  return Mouse
}
//在参数组件里面渲染UI组件
//测试高阶组件的——参数组件
const Position = props =>(
  <p>
  鼠标当前位置:(x:{props.x},y:{props.y})
  </p>  
)
const MousePosition = withMouse(Position)

class App extends Component {
  render() {
    return (
     <div>
       <MousePosition></MousePosition>
       <Apple></Apple>
       <Balala></Balala>
       能否提交到远端111223344555
     </div>
    );
  }
}
export default App;
