import React, { Component } from 'react';
import './App.css';
import { Cell } from './components';

const width = 9;

const map = [
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 1, 1, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 0, 1, 1, 1, 0,
  0, 0, 1, 0, 0, 0, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const generateMap = map => 
  map.map((item, i) => item === 1 ? <Cell key={i} x={i % width} y={~~(i / width)} /> : <div />)

class App extends Component {
  render() {
    return (
      <div className="App">
        {generateMap(map)}
      </div>
    );
  }
}

export default App;
