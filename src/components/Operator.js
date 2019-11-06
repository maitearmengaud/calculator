import React from 'react'

const Operator = (props) => {
    return (
    <button onClick= {() => props.buttonClick(props.children)}>{ props.children }</button>
    );
}

export default Operator
