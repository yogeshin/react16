import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 32 },
      { name: 'Pavel', age: 31 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    // DON'T DO THIS: this.state.person[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: 'Maximilian', age: 32 },
        { name: 'Pavel', age: 31 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  render() {
    // without JSX
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))

    // with JSX
    return (
      <div className="App">
        <h1>Hi! I'm React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;