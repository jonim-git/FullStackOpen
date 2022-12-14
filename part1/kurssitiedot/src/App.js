import React from 'react';

const Header = (props) => {
  return (
    <>
      <h4>Course title: {props.course}</h4>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Total Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} </p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>Part name: {props.part} | Number of exercises: {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>

  )
}

export default App;