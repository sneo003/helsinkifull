import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name}/>
            <Content part={course.parts}/>
            <Total total={course.parts}/>
        </div>
    )
  }

export default Course