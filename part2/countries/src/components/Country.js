import React, { useState } from 'react'
import Details from './Details'

const Country = (props) => {
    let value = props.value
    const [ country, setCountry ] = useState({})
    const [ showCountry, setShow ] = useState(true)

    const addCountry = (index) => {
        setCountry(value[index])
        if (showCountry) {
            setShow(!showCountry)
        }
    }
    // console.log(country);
    // console.log(showCountry);

    const showCountryDetails = showCountry === false ? <Details country={country}/> : ''

    //return capital, language and flag if result is one country
    if (value.length === 1) {
        return (
            <Details country={value[0]} />
        )
    } else {
        //return list of countries if more than one result
        return (
            <div>
            <ul style={{ paddingLeft: 0 }}>
                {value.map((country, index) =>
                <li style={{ listStyleType: 'none' }} key={country.name}>
                    {country.name} 
                    <button id={index} onClick={() => addCountry(index)}>show</button>
                </li>
                )}
            </ul>
            {showCountryDetails}
            </div>
        )
    }
}

export default Country