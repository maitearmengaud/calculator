import React, { Component, Fragment } from 'react'

class Buttons extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    buttonsNumbers = () => {
        const buttons = []
        for(let i=0; i < 10; i++){
            buttons.push(
                <button 
                key={i}
                onClick = {() => this.props.buttonClick(i)}
                >
                {i}
                </button>
            )}
        return buttons
    }

    render() {
        return(
            <Fragment>
                {this.buttonsNumbers()}
            </Fragment>
        )
    }
}

export default Buttons