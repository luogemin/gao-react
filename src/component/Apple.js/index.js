import React, { Component } from 'react'
import Formitem from '../form/Formitem'
export default class Apple extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"密码",
            submit:"登录"
        }
    }
    render() {
        return (
            <div>
                <Formitem name={this.state.title} btn={this.state.submit}/>
            </div>
        )
    }
}

