import React, { Component } from 'react'
import Formitem from '../form/Formitem'
export default class Balala extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"姓名",
            submit:"提交"
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