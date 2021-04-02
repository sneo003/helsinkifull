import React from 'react'

const Details = ({country}) => {
    // const country = props.country
    // console.log(country);
    return (
        <div>
            <h2>{country.name}</h2>
            <ul style={{ paddingLeft: 0 }}>
                <li style={{ listStyleType: 'none' }}>
                    capital {country.capital}
                </li>
                <li style={{ listStyleType: 'none' }}>
                    population {country.population}
                </li>
            </ul>               
            <h3>languages</h3>
            <ul>
                {country.languages.map(lang =>
            <li key={lang.name}>
                {lang.name}
            </li>
            )}
            </ul>
            <div><img height='100px' src={country.flag} alt={country.name}/></div>
        </div>
    )
}

export default Details