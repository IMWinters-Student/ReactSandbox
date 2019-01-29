import React, { Component } from 'react';
import classes from '../Containers/App.css';
import Persons from '../Components/Persons/Persons';
import AuthContext from '../Components/Auth/AuthContext'




class App extends Component {
  static contextType = AuthContext; 
  constructor( props ){
    super(props);
    console.log("Arrived Via Constructor.", props );
    this.state = {
      toggleClicked : 0,
      authenticated: false,
      title: "Relavint Persons",
      persons: [
        {id:"sodaf",name: "Isaac", age: 28},
        {id:"asldjkfasdjkln", name: "Alannah", age: 24},
        {id: "asfsve", name: "Lancelot", age: 4}
      ],
      showPersons: false
    };
  }s
  loginHandler =() =>{
    this.setState({authenticated: true});
  }

  deletePersonHandler = (index) =>{
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = (event) => {
    
      const doesShow = this.state.showPersons;
      this.setState( (prevState, props) => {
        return{  
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
        }
      }
    );
  
  }
  changeNameHandler = (event, id) =>{
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
          <Persons 
          clicked={this.deletePersonHandler} 
          persons={this.state.persons} 
          Changed={this.changeNameHandler}
          />
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
        <h1>{this.props.title}</h1>
        <p className={classes.Component}>It's working!</p>
        <button
          className = {btnClass} 
          onClick={this.togglePersonsHandler} >
            Toggle Persons
        </button>
        <button onClick={AuthContext.toggleAuth}> Login </button>
        
        {persons}
        
      </div>
             
    );
  }
}

export default App;
