import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch] = useState('')
  
  useEffect(() => {
    personService
      .getAll()
      .then(initalPerson => {
        setPersons(initalPerson)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value={search} onchange={handleSearch} text='filter shown with '/>
        <PersonForm 
        onsubmit={addPerson} 
        nameValue={newName}
        nameOnchange={handleNameChange}
        numValue={newNumber}
        numOnchange={handleNumChange}/>
      <h2>Numbers</h2> 
      <ul style={{ paddingLeft: 0 }}>
        {namesToShow.map(person =>
        <Person key={person.id} name={person}/>
        )}
      </ul> 
    </div>
  )
}

export default App