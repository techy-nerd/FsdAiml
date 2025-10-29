import React from 'react'
import './student.css' 
function Student(props) {
  return (
    <>
    <div className='container'>
       <h1>Student info</h1>
      <h2>Name: {props.name}</h2>
      <h2>Roll no: {props.roll}</h2>
      <h2>Branch: {props.branch}</h2>
      <h2>Section: {props.section}</h2>
      <h2>College: {props.college}</h2>
    </div>
   </>
  )
}

export default Student