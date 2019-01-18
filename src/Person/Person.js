import React from 'react';
import classes from './Person.css'



const Person = (props) => {
 
    return (
    <div className={classes.Person}>
        <p onClick={props.click}> My name is {props.name}. I am a human and I am {props.age} years old! </p>
        <p> {props.children}</p>
    <input type="text" value={props.name} onChange={props.change} className={classes.person}/>
    </div>
    )
}


export default Person;
