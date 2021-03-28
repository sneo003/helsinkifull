import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

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
      <h1>statistics</h1>
      <p>good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      all {total}<br />
      average {(good-bad)/total || 0}<br />
      positive {(good/total)*100 || 0} %
      </p>
    </div>
  )
}

export default App