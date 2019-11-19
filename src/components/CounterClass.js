import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleClick1() {
        let add = this.state.count + 1

        this.setState({
            count: add
        })
    }

    handleClick2() {
        let min = this.state.count - 1

        if (min < 0) return

        this.setState({
            count: min
        })
    }

    handleClick3() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div><br />
            <p>
            <Button color="primary" variant="outlined" onClick={() => this.handleClick1()} >Increment</Button>
            Count : {this.state.count}
            <Button color="primary" variant="outlined" onClick={() => this.handleClick2()} >Decrement</Button>
            </p>   
            <Button size="large" variant="contained" color="primary"  onClick={() => this.handleClick3()} >Reset</Button>             
            </div>
        )
    }
}