import { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <h2>give feedback</h2>
    </>
  )
}

const StatisticHeader = (props) => {
  return (
    <>
      <h2>statistics</h2>
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Button
        handleClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />     
      <Button
        handleClick={() => setBad(bad + 1)}
        text='bad'
      />   
      <StatisticHeader/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App