import { useState } from 'react'

const App = () => {
  const [good, setCounter] = useState(0) 
  const [neutral, setCounterN] = useState(0)
  const [bad, setCounterB] = useState(0)

  const incrementGood = () => setCounter(good + 1)
  const incrementNeutral = () => setCounterN(neutral + 1)
  const incrementBad = () => setCounterB(bad + 1)

  const a = (good + neutral + bad)
  const average = ( a / (good - bad))
  const percentage = ((a / good ) * 100)

  return (
    <div>
    <h1>Give feedback</h1>
    <button onClick={incrementGood}>Good</button>
    <button onClick={incrementNeutral}>Neutral</button>
    <button onClick={incrementBad}>Bad</button>

    <h1>Statistics</h1>
   <div>
   <p>Good {good}</p>
   </div>
   <div>
   <p>Neutral {neutral}</p>
   </div>
   <div>
   <p>Bad {bad}</p>
   </div>
   <div>
    <p>All: {a}</p>
   </div>
   <div>
    <p>Average {average}</p>
   </div>
   <div>
    <p>Positive percentage: {percentage} %</p>
   </div>
    </div>
  )
}

export default App;
