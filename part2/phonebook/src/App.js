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
  }, [persons.length])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const persontoDel = persons.find(person => person.name === newName)
    const changePerson = { ...persontoDel, number: newNumber}
    if (persontoDel) {
      if (window.confirm(`${persontoDel.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(changePerson.id, changePerson)
          .then(newNumPerson => {
            setPersons(persons.map(person => person.name !== personObject.name ? person : newNumPerson))
            setNewName('')
            setNewNumber('')
          })
      }
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

  const delPerson = (id) => {
    const persontoDel = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${persontoDel.name}?`)) {
      personService
      .del(id)
      .then(
        setPersons(persons.filter(person => person.id !== id))
      )
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
      <h2>Add a new</h2>
      <PersonForm 
      onsubmit={addPerson} 
      nameValue={newName}
      nameOnchange={handleNameChange}
      numValue={newNumber}
      numOnchange={handleNumChange}/>
      <h2>Numbers</h2> 
      <Person persons={namesToShow} onclick={delPerson}/>
    </div>
  )
}

export default App