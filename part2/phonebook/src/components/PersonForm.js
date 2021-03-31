import React from 'react'
import Filter from './Filter'

const PersonForm = (props) => {
    return (
        <form onSubmit={props.onsubmit}>
            <Filter text='name: ' value={props.nameValue}
           onchange={props.nameOnchange} />
            <Filter text='number: ' value={props.numValue}
           onchange={props.numOnchange} />
            <div>
            <button type="submit">add</button>
            </div>
        </form> 

    )
}

export default PersonForm