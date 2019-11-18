import React, { Fragment, useState } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'
import Operator from './components/Operator'
import Delete from './components/Delete'
import * as math from 'mathjs'
import './App.css'


function App(props) {
  const [display, setDisplay] = useState('');
  function concat(n) {
    setDisplay(display + n);
  }
  function equal() {
    setDisplay(math.round(math.evaluate(display),5));
  }
  function clear() {
    setDisplay('');
  }
  function deleteOneNumber() {
    setDisplay(display.slice(0, -1));
  }

    return (
      <Fragment>
        <div className="container">
          <Display display={ display }></Display>
          <div className="calculator">
              <div className="numbers">
                <Buttons buttonClick={ concat }></Buttons>
                <Operator buttonClick={ concat }>.</Operator>
                <Operator buttonClick={ clear }>C</Operator>
              </div>  
              <div className="operators">
                <Operator buttonClick={ concat }>+</Operator>
                <Operator buttonClick={ concat }>-</Operator>
                <Operator buttonClick={ concat }>*</Operator>
                <Operator buttonClick={ concat }>/</Operator>
              </div>
          </div>
          <div className="bottom">
              <Delete buttonClick={ deleteOneNumber }></Delete>
                <div className="equal">
                  <Operator buttonClick={equal} >=</Operator>
                </div>
          </div>
        </div>
      </Fragment>
    );
  }


export default App;
