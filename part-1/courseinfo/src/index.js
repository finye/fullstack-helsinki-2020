import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Part = (props) => {
  return (
    <p>
      {props.parts} {props.exercises}
    </p>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part parts={props.firstPart} exercises={props.firstExercise} />
      <Part parts={props.secondPart} exercises='7' />
      <Part parts={props.thirdPart} exercises='14' />
    </div>
  );
};
const Total = (props) => {
  return <p> Number of exercises {props.total}</p>;
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  const getExercises = (course) => {
    return course.parts.map((part) => {
      return part.exercises;
    });
  };

  console.log(getExercises(course));

  const sum = getExercises(course).reduce((total, currentValue) => {
    total += currentValue;

    return total;
  }, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content
        firstPart={course.parts[0].name}
        secondPart={course.parts[1].name}
        thirdPart={course.parts[2].name}
        firstExercise={course.parts[0].exercises}
      />
      <Total total={sum} />
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
