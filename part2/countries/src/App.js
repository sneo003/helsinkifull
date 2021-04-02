import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Country from './components/Country'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ search, setSearch ] = useState('')
  // const [ country, setCountry ] = useState({})
  // const [ showCountry, setShow ] = useState(false)
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    //assign input value to val
    let val = event.target.value
    //trim beginning whitespace from val
    setSearch(val.trimStart())
  }
  //match search string to countries list
  let countriesToShow = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

  //set return string
  let countriesList = 'Too many matches, specify another filter'
  // return empty list if search starts with whitespace
  if (!search) {
    countriesList = ' '
  }
  return (
    <div>
      <Filter value={search} onchange={handleSearch} text='filter shown with '/>
      {countriesToShow.length <= 10 ? <Country value={countriesToShow}/> : countriesList}
    </div>
  )
}

export default App