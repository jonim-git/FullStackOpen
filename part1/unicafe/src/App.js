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
    <thead>
      <tr>
        <th>statistics</th>
      </tr>
    </thead>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value}
        </td>
      </tr>
    </>
  )
}

const Statistics = ({ good, neutral, bad, total, average }) => {
  const fbAvg = average / total
  const positivePercentage = good / total * 100

  if (total === 0) {
    return (
      <table>
        <StatisticHeader />
        <tbody>
          <tr>
            <td>
              No feedback given yet
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (

    <table>
      <StatisticHeader />
      <tbody>
        <StatisticLine text='good (+1)' value={good} />
        <StatisticLine text='neutral (+0)' value={neutral} />
        <StatisticLine text='bad (-1)' value={bad} />
        <StatisticLine text='total feedback' value={total} />
        <StatisticLine text='feedback average' value={fbAvg} />
        <StatisticLine text='positive feedback percentage' value={positivePercentage + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = (e) => {
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(average + 1)
    e.preventDefault()
  }

  const handleNeutral = (e) => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setAverage(average + 0)
    e.preventDefault()
  }

  const handleBad = (e) => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage(average - 1)
    e.preventDefault()
  }
  //EI TOIMI 
  console.log(average, 'average')
  console.log(total, 'total')

  return (
    <div>
      <Header />
      <Button
        handleClick={handleGood}
        text='good'
      />
      <Button
        handleClick={handleNeutral}
        text='neutral'
      />
      <Button
        handleClick={handleBad}
        text='bad'
      />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average} />
    </div>
  )
}

export default App