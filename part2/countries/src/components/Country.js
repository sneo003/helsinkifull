import React from 'react'

const Country = ({ value }) => {
    //return capital, language and flag if result is one country
    if (value.length === 1) {
        return (
            <div>
                <h2>{value[0].name}</h2>
                <ul style={{ paddingLeft: 0 }}>
                    <li style={{ listStyleType: 'none' }}>
                        capital {value[0].capital}
                    </li>
                    <li style={{ listStyleType: 'none' }}>
                        population {value[0].population}
                    </li>
                </ul>               
                <h3>languages</h3>
                <ul>
                    {value[0].languages.map(lang =>
                <li key={lang.name}>
                    {lang.name}
                </li>
                )}
                </ul>
                <img width='120px' src={value[0].flag} alt={value[0].name}/>
            </div>
        )
    } else {
        //return list of countries if more than one result
        return (
            <ul style={{ paddingLeft: 0 }}>
                {value.map(country =>
                <li style={{ listStyleType: 'none' }} key={country.name}>
                    {country.name}
                </li>
                )}
            </ul> 
        )
    }
}

export default Country