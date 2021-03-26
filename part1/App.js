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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content parta={part1.name} exercisea={part1.exercises} partb={part2.name} exerciseb={part2.exercises} partc={part3.name} exercisec={part3.exercises}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
