import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: 'Frankenstein', id: 'asr01' },
        { name: 'Dracula', id: 'asc23' },
        { name: 'Zombie', id: 'art15' }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
