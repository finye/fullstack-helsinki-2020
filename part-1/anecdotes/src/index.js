import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const initialValues = (arr) => {
  return Object.keys(arr).reduce((obj, curr) => {
    obj[curr] = 0;

    return obj;
  }, {});
};

const getRandom = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialValues(anecdotes));
  const [maxVote, setMaxVote] = useState();

  const index = anecdotes.indexOf(anecdotes[selected]);

  const randomiseAnecdotes = () => {
    setSelected(getRandom(anecdotes));
  };

  const voteHandler = (arr, index) => {
    const votes = { ...arr }; // arr.slice()
    votes[index] += 1;

    setVotes(votes);

    const v = Object.values(votes);
    const max = Math.max(...v);
    setMaxVote({
      vote: anecdotes[v.indexOf(max)],
      count: max,
    });
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div id='anecdotes'>{anecdotes[selected]}</div>
      <button onClick={() => voteHandler(votes, index)}>vote</button>
      <button onClick={randomiseAnecdotes}>anecdote</button>
      <div id='votes'>has {votes[index]}</div>
      <h2>Anecdote with most votes</h2>
      {maxVote && (
        <div>
          <p>has {maxVote.count} counts</p>
          <b> {maxVote.vote}</b>
        </div>
      )}
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
