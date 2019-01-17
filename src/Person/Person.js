import React from 'react';

const Person = (props) => {
    return (
    <div className="Person">
    <p onClick={props.click}> My name is {props.name}. I am a human and I am {props.age} years old!</p>
    <p> {props.children}</p>
    <input type="text" value={props.name} onChange={props.change} className="Person"/>
    </div>
    )
}

export default Person;
