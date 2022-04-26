import React, { Component } from "react";

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tick(), 20000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Componente Destruido Satisfactoriamente");
    }

    tick(){
        this.setState({
            count: this.state.count +1
        })
    }

    render() {
        return (
            <p>{this.state.count}</p>
        )
    }
}

export default Timer