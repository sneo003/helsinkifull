import React from 'react'
// import axios from 'axios'

const Details = (props) => {
    const country = props.country
    const weather = props.weather
    // console.log(props);
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
            <h3>Spoken languages</h3>
            <ul>
                {country.languages.map(lang =>
            <li key={lang.name}>
                {lang.name}
            </li>
            )}
            </ul>
            <div><img height='100px' src={country.flag} alt={country.name}/></div>
            <h3>Weather in {country.name}</h3>
            <p>temperature: {weather.temp} Celcius</p>
            <p>wind: {weather.wind} kmph</p>
        </div>
    )
}

export default Details