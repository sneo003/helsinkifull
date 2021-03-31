import React from 'react'

const Filter = (props) => {
    return (
        <div>
           {props.text} <input 
           value={props.value}
           onChange={props.onchange} 
           />
        </div>
    )
}

export default Filter