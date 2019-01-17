import React from 'react';

const Person = (props) => {
    return (
    <div>
    <p> My name is {props.name}. I am a human and I am {props.age} years old!</p>
    <p> {props.children}</p>
    </div>
    )
}

export default Person;
