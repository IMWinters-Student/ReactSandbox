import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';




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
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div className={classes.App}>
          {this.state.persons.map((person, index) => {
            return(
            
            <ErrorBoundry key={person.id}> 
              <Person 
                name={person.name} 
                age={person.age} 
                change={(event) => this.changeNameHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}/>
            </ErrorBoundry>
               
              )
            }
          )
        }
      </div>
      );

      btnClass = classes.Red; 
    }
    

    const cssClasses = [];
    if (this.state.persons.length <= 2){
    cssClasses.push(classes.red)
    }
    if (this.state.persons.length <=1){
    cssClasses.push(classes.bold)
    }


    return (
      
      <div className={classes.App}>
        <h1>React App</h1>
        <p className={classes.Component}>It's working!</p>
        <button
          className = {btnClass} 
          onClick={this.togglePersonsHandler} >
            Toggle Persons
        </button>
        {persons}
      </div>
      
    );
  }


  
}

export default App;
