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
      {props.part[0].name} {props.part[0].exercises} 
      <br/><br/>
      {props.part[1].name} {props.part[1].exercises}
      <br/><br/>
      {props.part[2].name} {props.part[2].exercises}
  </p>
  )  
}
const Content = (props) => {
    return (
      <div>
          <Part part={props.parts}/>
      </div>
    )  
}
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </div>
  )
}

export default App
