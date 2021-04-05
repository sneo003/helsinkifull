import React from 'react'

const Person = ({ persons, onclick }) => {
    // console.log(props.persons);
    return (
        <ul style={{ paddingLeft: 0 }}>
            {persons.map(person => 
            <li style={{ listStyleType: 'none' }}
            key={person.name}>
                {person.name} {person.number}
                <button 
                id={person.id} 
                onClick={() => onclick(person.id)}> 
                delete 
                </button>
            </li>
            )}
        </ul>
    )
}
export default Person