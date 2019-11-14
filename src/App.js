import React, { Component, Fragment } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'
import Operator from './components/Operator'
import Delete from './components/Delete'
import * as math from 'mathjs'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: ''
    };
  }

concat = (n) => {
  this.setState({
    display : this.state.display + n
  });
};

equal = () => {
  this.setState({
    display : math.evaluate(this.state.display)
  })
};

round = () => {
  this.setState({
    display : math.round(math.e, 5)
  })
}

clear = () => {
  this.setState({
    display : ''
  })
}

deleteOneNumber = () => {
  this.setState({
    display : this.state.display.slice(0, -1)
  })
}

  render() {
    return (
      <Fragment>
        <div className="container">
        <Display display={ this.state.display }></Display>
        <div className="calculator">
            <div className="numbers">
              <Buttons buttonClick={ this.concat }></Buttons>
              <Operator buttonClick={ this.concat }>.</Operator>
              <Operator buttonClick={ this.clear }>C</Operator>
              </div>  
          <div className="operators">
            <Operator buttonClick={ this.concat }>+</Operator>
            <Operator buttonClick={ this.concat }>-</Operator>
            <Operator buttonClick={ this.concat }>*</Operator>
            <Operator buttonClick={ this.concat }>/</Operator>
            </div>

          </div>
          <div className="bottom">
                <Delete buttonClick={ this.deleteOneNumber }></Delete>
                <div className="equal">
                  <Operator buttonClick={ this.equal, this.round }>=</Operator>
                </div>
              </div>

        </div>
      </Fragment>
    );
  }
}

export default App;
