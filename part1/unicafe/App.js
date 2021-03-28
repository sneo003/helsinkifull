import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
const Statistics = (props) => {
  if (props.total == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
    <h1>statistics</h1>
      <p>good {props.good}<br />
      neutral {props.neutral}<br />
      bad {props.bad}<br />
      all {props.total}<br />
      average {(props.good-props.bad)/props.total || 0}<br />
      positive {(props.good/props.total)*100 || 0} %
      </p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  
  const handleFeedback = (setFeedback, feedback) => { 
    setFeedback(feedback + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleFeedback(setGood, good)} text='good'/>
      <Button handleClick={() => handleFeedback(setNeutral, neutral)} text='neutral'/>
      <Button handleClick={() => handleFeedback(setBad, bad)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App