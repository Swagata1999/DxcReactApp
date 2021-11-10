import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increase() {
               this.setState((prevState,props) => ({
            count: prevState.count + props.addValue
        }))
        console.log(this.state.count)
    }


    increaseFive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.increaseFive()}>increment</button>
            </div>
        )
    }
}

export default Counter