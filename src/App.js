import React, { useState } from 'react'

import './App.css'

const Feedback = ({good, setGood, neutral, setNeutral, bad, setBad}) => {
  return (
    <div className='feedback'>
      <button className='btn btn-good' onClick={() => setGood(good+1)}>Good</button>
      <button className='btn btn-neutral' onClick={() => setNeutral(neutral+1)}>Neutral</button>
      <button className='btn btn-bad' onClick={() => setBad(bad+1)}>Bad</button>
    </div>
  );
};

const Statistics = ({good, neutral, bad}) => {
  return (
    <table className='statistics'>
      <thead>
        <tr>
          <th>Rating</th>
          <th>Number of Votes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Good</th>
          <td>
            {good}
          </td>
        </tr>
        <tr>
          <th>Neutral</th>
          <td>
            {neutral}
          </td>
        </tr>
        <tr>
          <th>Bad</th>
          <td>
            {bad}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbackControls = {good, setGood, neutral, setNeutral, bad, setBad}
  const statisticsControls = {good, neutral, bad}

  return (
    <div className="app">
      <div className="container">
        <h1 className="font-bold">Sigma</h1>
        <h2>Give feedback</h2>
        <Feedback {...feedbackControls}/>
        <h2>Statistics</h2>
        <Statistics {...statisticsControls} />
      </div>
    </div>
  );
}

export default App;
