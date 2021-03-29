import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
const Anecdote = (props) => {
  return (
    <div>
      <p>{props.anec}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0
  })
  
  const handleAnecdotes = (setSelected, selected, arr) => { 
    selected = Math.floor(Math.random() * Math.floor(arr.length-1))
    setSelected(selected)
  }
  const handleVotes = (selected, votes) => {
    const copy = { ...votes } 
    copy[selected] += 1
    setVotes(copy)
  }
  let highest = Object.values(votes).reduce((max, vote) => max > vote ? max : vote)
  let index = Object.keys(votes).find(key => votes[key] === highest)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anec={anecdotes[selected]} votes={votes[selected]}/>
      <div>
        <Button handleClick={() => handleVotes(selected, votes)} text='vote'/>
        <Button handleClick={() => handleAnecdotes(setSelected, selected, anecdotes)} text='next anecdote'/>
      </div>
      <h1>Anecdote with most votes</h1>
      <Anecdote anec={anecdotes[index]} votes={votes[index]}/>
    </div>
  )
}

export default App