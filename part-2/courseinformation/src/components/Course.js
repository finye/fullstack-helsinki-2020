import React from 'react';
import CourseList from './CourseList';

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Total = ({ exerciseList }) => {
  const sum = exerciseList.reduce((acc, eList) => {
    return acc + eList.exercises;
  }, 0);
  return <b>Total of {sum} exercises </b>;
};

const Course = (props) => {
  const { course } = props;
  const courses = course.reduce((acc, _course) => {
    acc = (acc || []).concat({ name: _course.name, courses: _course.parts });

    return acc;
  }, []);

  return (
    <div>
      {courses.map((item, index) => {
        const key = item.name.toUpperCase() + index;
        console.log(key, 'whichwhich');
        console.log(item.courses, 'show urself');
        return (
          <div key={key}>
            <Header title={item.name} />
            <CourseList courses={item.courses} />
            <Total exerciseList={item.courses} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
