// Shilah Watson 1.7
import { useState } from 'react'

import './App.css'

function App() {
  const [good, setGood] = useState(0) //making buttons
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button =(props) => {
    //button component functions (reusable)
    return(
      <button onClick = {props.onClick}>
        {props.text}
      </button>
    )
    
  }
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    //function of buttons
    <>
      <div>
        <h1>give feedback</h1>
        <Button onClick={()=> setGood(good+1)} text = "Good"/>
        <Button onClick={()=> setNeutral(neutral+1)} text = "Neutral"/>
        <Button onClick={()=> setBad(bad+1)} text = "Bad"/>
      </div>
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average.toFixed(1)}</p>
        <p>positive {positive.toFixed(1)} %</p>

      </div>
    </>
  )
}

export default App
