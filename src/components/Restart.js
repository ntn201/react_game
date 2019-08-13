import React from 'react';

class Restart extends React.Component{
    constructor(props){
        super(props)  
    }
    render(){
        return(
            <button onClick={this.props.handleClick}>Restart</button>
        )
    }
}

export default Restart