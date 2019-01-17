import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import './Person/Person.css'

class App extends Component {
  state = {
    persons: [
      {id:"sodaf",name: "Isaac", age: 28},
      {id:"asldjkfasdjkln", name: "Alannah", age: 24},
      {id: "asfsve", name: "Lancelot", age: 4}
    ],
    showPersons: false
  }

  deletePersonHandler = (index) =>{
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = (event) => {
    
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  
  }
  changeNameHandler =(event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons =[...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons: persons});
  }



  //This is what is rendered to the browser
  render() {

    let persons = null;
  const style = {
    backgroundColor: 'green',
    padding: '10px',
    border: '1px black',
    font: 'inherit'
    

  }  

  if (this.state.showPersons){
    persons = (
      <div className="App">
        {this.state.persons.map((person, index) => {
          return( 
           
            <Person 
            name={person.name} 
            age={person.age}
            key={person.id}
            change={(event) => this.changeNameHandler(event, person.id)}
            click={() => this.deletePersonHandler(index)}/> 
            
          )
        })}
      </div>
    );
    style.backgroundColor = 'red';
  }

  const cssClasses = [];
  if (this.state.persons.length <= 2){
    cssClasses.push('red')
  }
  if (this.state.persons.length <=1){
    cssClasses.push('bold')
  }


    return (
      <div className="App">
        <h1>React App</h1>
        <p className={cssClasses.join(" ")}>It's working!</p>
        <button
          style = {style} 
          onClick={this.togglePersonsHandler} 
          className='Button'>
            Toggle Persons
        </button>
        {persons}
      </div>
    );
  }


  
}

export default App;
