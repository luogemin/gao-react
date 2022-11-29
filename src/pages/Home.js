import React, { Component } from 'react'
import store from './store'
import {sendAction} from './actions'

export default class Home extends Component {
  handleClick =()=>{
    const action =sendAction()
    store.dispatch(action)
  }
  //当组件加载完毕监听
  componentDidMount(){
    store.subscribe(()=>{console.log('subscibe:',store.getState());})
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>发送一个action</button>
      </div>
    )
  }
}
