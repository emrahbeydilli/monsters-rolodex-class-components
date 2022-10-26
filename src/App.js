import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "12345"
        },
        {
          name: "Frank",
          id: "34567"
        },
        {
          name: "Jacky",
          id: "78906"
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
