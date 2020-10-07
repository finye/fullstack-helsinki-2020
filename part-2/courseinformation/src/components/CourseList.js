import React from 'react';

const CourseList = (courses) => {
  return courses.courses.map((l, index) => {
    const key = l.name.split(' ').join('-').toLowerCase();
    return (
      <p key={key}>
        {l.name} {l.exercises}
      </p>
    );
  });
};

export default CourseList;
