import React, { useEffect, useState } from 'react'
import Details from './Details'
import axios from 'axios'

const Country = (props) => {
    let value = props.value
    const [ country, setCountry ] = useState({})
    const [ showCountry, setShow ] = useState(true)
    const [ weather, setWeather ] = useState([])

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
  
        var options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {
                q: country.name,
                lat: '0',
                lon: '0',
                units: 'metric',
            },
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            const weatherObj = {
                name: response.data.name,
                temp: response.data.main.temp,
                wind: response.data.wind.speed
            }
            setWeather(weatherObj)
            // console.log(response.data);
          }).catch(function (error) {
            console.error(error);
            setWeather({})
          })
          return () => setWeather({})
    }, [country.name])

    const addCountry = (index) => {
        setCountry(value[index])
        if (showCountry) {
            setShow(!showCountry)
        }
    }

    const showCountryDetails = showCountry === false ? <Details country={country} weather={weather}/> : ''

    //return capital, language and flag if result is one country
    if (value.length === 1) {
        if (country.name !== value[0].name){
            setCountry(value[0])
        }
        return (
            <Details country={country} weather={weather}/>
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