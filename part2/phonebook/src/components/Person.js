import React from 'react'

const Person = ({ name }) => {
    return (
        <li style={{ listStyleType: 'none' }}>{name.name} {name.number}</li>
    )
}

export default Person