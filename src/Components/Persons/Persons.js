import React from 'react';
import Person from './Person/Person';


const Persons=(props)=>props.persons.map((person, index)=> {
    return (<Person
                key={person.id}
                name={person.name} 
                age={person.age}
                position={index}
                change={(event) => props.Changed(event, person.id)}
                click={() => props.clicked(index)}/>
              )
            }
)



export default React.memo(Persons);