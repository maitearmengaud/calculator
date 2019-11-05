import React from 'react'


class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return(
            <h1>
                {this.props.number}
            </h1>
        )
    }       
} 

export default Display