import React, { Fragment } from 'react'

const Buttons = (props) => {
    function  buttonsNumbers () {
        const buttons = []
        for(let i=0; i < 10; i++){
            buttons.push(
                <button 
                key={i}
                onClick = {() => props.buttonClick(i)}
                >
                {i}
                </button>
            )}
        return buttons
    }

    return(
        <Fragment>
            {buttonsNumbers()}
        </Fragment>
    )
}


export default Buttons