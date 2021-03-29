import React from 'react'
import Part from './Part'

const Content = ({ part }) => {
  return (
    <div>
      {part.map(part =>
      <Part key={part.id} part={part} />
      )}
    </div>
  )
}

export default Content