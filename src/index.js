import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from "./components/Square"
import Restart from "./components/Restart"

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            player_x: 2,
            player_y: 2,
            square_list : [[],[],[],[],[]],
            done_square: 0,
            move_left: 50
        }
        this.handleClick = this.handleClick.bind(this)
        this.initGame = this.initGame.bind(this)
        this.restartGame = this.restartGame.bind(this)
        this.initGame()
    }

    initGame(){
        console.log("Init Game")
        let temp = [[],[],[],[],[]]
        for(let i = 0;i < 5;i ++){
            for(let j = 0;j < 5;j ++){
                let square = new Square({x:j,y:i,handleClick:this.handleClick})
                square.state.state = "open"
                temp[i][j] = square
            }
        }
        this.state.square_list = temp
        this.state.square_list[2][2].state.state = "this"
        this.state.player_x = 2
        this.state.player_y = 2
        this.state.done_square = 2
        ReactDOM.render(
            <Game/>,
            document.getElementById('root')
        );
    }
    
    restartGame(){
        console.log(this.state.square_list)
        for(let i = 0;i < 5;i ++){
            for(let j = 0;j < 5;j ++){
               this.state.square_list[i][j].state.state = "open"
            }
        }
        this.state.square_list[2][2].state.state = "this"
    }

    handleClick(square){
        // console.log(square.state)
        if (this.state.move_left > 0){
            this.setState({move_left:this.state.move_left-1})
            if ((Math.abs(this.state.player_x-square.props.x)+Math.abs(this.state.player_y-square.props.y)) == 3){
                console.log("Ok")
                if (square.state.state != "done"){
                    this.setState({done_square:this.state.done_square+1})
                }
                square.state.state = "this"
                this.state.square_list[this.state.player_y][this.state.player_x].state.state = "done"
                console.log(this.state.square_list[this.state.player_x][this.state.player_y])
                this.setState({
                    player_x: square.props.x,
                    player_y: square.props.y})
            }
        }
    }

    render (){
        console.log(this.state.done_square)
        if (this.state.done_square < 25){
            return (
                <div className="game">
                    <h1>You have {this.state.move_left} move left</h1>
                    <div className="chess-board">
                        {this.state.square_list.map(row => row.map(square => square.render()))}
                    </div>
                    <Restart handleClick={this.initGame}/>
                </div>
                )
        }
        else{
            return(
                <div className="game">
                    <h1>You Won</h1>
                    <div className="chess-board">
                        {this.state.square_list.map(row => row.map(square => square.render()))}
                    </div>
                    <Restart handleClick={this.initGame}/>
                </div>
            )
        }
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);