
import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const AnecdotesDisplay = ({ anecdote, votes, winnerVote, nextAnecdote, vote }) => {

  return (
    <div>
      <h1>Random anecdote:</h1>
      {anecdote}
      <p> votes: {votes} </p>
      <Button handleClick={nextAnecdote} text={"Next random anecdote"} />
      <Button handleClick={vote} text={"Vote for this anecdote"} />
      <h2>Winner anecdote</h2>
      {winnerVote}
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [array, setArray] = useState(new Uint8Array(7))

  const winnerVote = array.indexOf(Math.max(...array))
  const random = () => Math.floor(Math.random() * (anecdotes.length - 1 + 1)) + 0;
  const nextAnecdote = () => setSelected(random)

  const vote = () => {
    const copy = [...array]
    copy[selected] += 1
    setArray(copy)
  }

  return (
    <div>
      <AnecdotesDisplay anecdote={anecdotes[selected]} votes={array[selected]} winnerVote={anecdotes[winnerVote]} nextAnecdote={nextAnecdote} vote={vote} />
    </div>
  )
}

export default App