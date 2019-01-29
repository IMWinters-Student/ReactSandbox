import React, {Component} from 'react';
import classes from './Person.css';
import propTypes from 'prop-types';
import AuthContext from '../../Auth/AuthContext' ;




class Person extends Component  {
    static contextType = AuthContext;
    constructor( props ){
        super(props);
        this.inputElement  = React.createRef();
        console.log('[Person.JS] Inside Constructor'); 
    }
    
    componentDidMount() {
        if (this.props.position === 0){
        this.inputElement.current.focus();}
        console.log(this.context);
    }
    //what is exported visually
    render() {
        console.log('[person.js] Inside Render()');
        return(
            <>
            {this.context.isAuth?<p>I'm logged in! </p>: <p>Please login</p>}
                <p onClick={this.props.click}> My name is {this.props.name}. I am a human and I am {this.props.age} years old! </p>
                <p> {this.props.children}</p>
                <input
                ref={this.inputElement} 
                type="text" 
                value={this.props.name} 
                onChange={this.props.change}
                className={classes.person}
                />
            
            </>)
    }
}

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func,
};


export default Person;
