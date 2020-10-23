import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => (
  <button onClick={props.clickhandle}>{props.text}</button>
);
const Statistics = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.value} {props.symbol}
      </p>
    </div>
  );
};
const Feedback = (props) => {
  if (props.allTheClicks.length === 0) {
    return <div> No feedback given </div>;
  }
  return <div></div>;
};
const App = (props) => {
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const sum = [good, neutral, bad].reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  const average = (good - bad) / sum;
  const positive = (good / sum) * 100;

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'));
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'));
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setAll(allClicks.concat('B'));
    setBad(bad + 1);
  };

  console.log([good, neutral, bad], sum);
  return (
    <div>
      <h1>give feedback</h1>
      <Button clickhandle={handleGoodClick} text='good'></Button>
      <Button clickhandle={handleNeutralClick} text='neutral'></Button>
      <Button clickhandle={handleBadClick} text='bad'></Button>
      <h1>statistics</h1>

      <Feedback allTheClicks={allClicks} />

      {allClicks.length > 0 && (
        <>
          <table>
            <tbody>
              <tr>
                <td>
                  <Statistics text='good' />
                </td>
                <td>
                  <Statistics value={good} />
                </td>
              </tr>
              <tr>
                <td>
                  <Statistics text='neutral' />
                </td>
                <td>
                  <Statistics value={neutral} />
                </td>
              </tr>
              <tr>
                <td>
                  <Statistics text='bad' />
                </td>
                <td>
                  <Statistics value={bad} />
                </td>
              </tr>
              <tr>
                <td>
                  <Statistics text='all' />
                </td>
                <td>
                  <Statistics value={sum} />
                </td>
              </tr>
              <tr>
                <td>
                  <Statistics text='average' />
                </td>
                <td>
                  <Statistics value={average} />
                </td>
              </tr>
              <tr>
                <td>
                  <Statistics text='positive' />
                </td>
                <td>
                  <Statistics value={positive} symbol={'%'} />
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
