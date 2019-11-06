import React, { Component, Fragment } from 'react'
import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import Operator from './components/Operator'

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
    display : eval(this.state.display)
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
        <Display display={ this.state.display }></Display>
        <Buttons buttonClick={ this.concat }></Buttons>
        <Operator buttonClick={ this.concat }>+</Operator>
        <Operator buttonClick={ this.concat }>-</Operator>
        <Operator buttonClick={ this.clear }>C</Operator>
        <Operator buttonClick={ this.equal }>=</Operator>
      </Fragment>
    );
  }
}

export default App;
