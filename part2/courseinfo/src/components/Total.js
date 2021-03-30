import React from 'react'

const Total = ({ total }) => {
    const exerciseArr = total.map(tot => tot.exercises)
    const sum = exerciseArr.reduce((acc, one) => acc + one)
    return (
    <h4>total of {sum} exercises</h4>
    ) 
}

export default Total