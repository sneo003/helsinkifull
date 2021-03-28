import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
const Statistic = ({ text, value, unit }) => {
  return (
    <div>
      <tr>
        <td width='60px'>{text}</td>
        <td>{value}</td>
        <td>{unit}</td>
      </tr>
    </div>
  )
}
const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
      <Statistic text="good" value ={props.good} unit=''/>
      <Statistic text="neutral" value ={props.neutral} unit=''/>
      <Statistic text="bad" value ={props.bad} unit=''/>
      <Statistic text="all" value ={props.total} unit=''/>
      <Statistic text="average" value ={(props.good-props.bad)/props.total || 0} unit=''/>
      <Statistic text="positive" value ={(props.good/props.total)*100 || 0} unit='%'/>
      </table>
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
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App