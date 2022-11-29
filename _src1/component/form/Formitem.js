import React, { Component } from 'react'

export default class Formitem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <form>
                    {this.props.name}:<input type="text"/>
                    <button>{this.props.btn}</button>
                </form>
            </div>
        )
    }
}

