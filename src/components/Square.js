import React from 'react';

class Square extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            player: 0,
            state: "open"
        }
    }

    render(){
        if (this.state.state == "open"){
            return (
                <button className="chess-square" onClick={(square,x,y) => this.props.handleClick(this,this.props.x,this.props.y)}></button>
            )
        }
        if (this.state.state == "done"){
            return (
                <button className="done-square" onClick={(square) => this.props.handleClick(this)}></button>
            )
        }
        if (this.state.state == "this"){
            return (
                <button className="this-square" onClick={(square) => this.props.handleClick(this)}></button>
            )
        }
    }
}

export default Square