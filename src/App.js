import React, { Component, Fragment } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'
import Operator from './components/Operator'
import Clear from './components/Clear'
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

clear = () => {
  this.setState({
    display : ''
  })
}

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="left-block">
            <Operator buttonClick={ this.concat }>+</Operator>
            <Operator buttonClick={ this.concat }>-</Operator>
            <Operator buttonClick={ this.concat }>x</Operator>
            <Operator buttonClick={ this.concat }>/</Operator>
          </div>
          <div className="right-block">
            <Display display={ this.state.display }></Display>
            <div className="numbers">
              <Buttons buttonClick={ this.concat }></Buttons>
              <Operator buttonClick={ this.concat }>.</Operator>
              <Clear buttonClick={ this.clear }>C</Clear>
            </div>
          </div>
          <Operator buttonClick={ this.equal }>=</Operator>
        </div>
      </Fragment>
    );
  }
}

export default App;
