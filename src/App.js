import React, { Component } from 'react';
import './App.css';
import { Cell } from 'components';

const width = 9;

const map = [
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, { color: 1, unit: { type: 'unit1', exp: 1 } }, { color: 1, unit: { type: 'unit2'} }, 0, { color: 1, unit: { type: 'unit3'} }, 1, 0, 0, 0,
  0, 0, { color: 1, unit: { type: 'unit4', exp: 3 } }, { color: 1, unit: { type: 'home'} }, 1, 1, 2, 0, 0,
  0, 0, 1, 1, 1, 1, 2, 2, 0,
  0, 1, 1, 1, 1, { color: 2, unit: { type: 'tree'} }, { color: 2, unit: { type: 'tower'} }, 0, 0,
  0, 0, 1, 1, 1, 2, 2, 0, 0,
  0, 1, 1, 1, 0, 1, 2, 2, 0,
  0, 0, 1, 0, 0, 0, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const generateMap = map => 
  map.map((cell, i) => cell !== 0 ? <Cell key={i} x={i % width} y={~~(i / width)} unit={cell.unit} color={cell.color || cell} /> : <div />)

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
