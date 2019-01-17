import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Isaac", age: 28},
      {name: "Alannah", age: 24},
      {name: "Lancelot", age: 4}
    ]
  }

  switchNameHandler = () => {
    
    this.setState({
      persons:
      [{name: "Isaac", age: 28},
      {name: "Alannah", age: 24},
      {name: "Lancelot", age: 30}]
    })
    
    //Dont do this
    //this.state.persons[0].name = "BillyLooWho"  
    
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> <li>Children Data</li> </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> <li>Children Data</li> </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> <li>Children Data</li><li>Child data 2</li> </Person>
      </div>
    );
  }
}

export default App;
