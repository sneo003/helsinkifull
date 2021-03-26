import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <p>
    {props.onepart} {props.oneexercise}
  </p>
  )  
}
const Content = (props) => {
  return (
    <div>
      <Part onepart={props.parta} oneexercise={props.exercisea}/>
      <Part onepart={props.partb} oneexercise={props.exerciseb}/>
      <Part onepart={props.partc} oneexercise={props.exercisec}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parta={part1} exercisea={exercises1} partb={part2} exerciseb={exercises2} partc={part3} exercisec={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
