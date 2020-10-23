import React from 'react';

const Persons = (props) => {
  const searchedPerson = props.persons.filter(
    (person) =>
      person.name.toLowerCase().includes(props.searched.toLowerCase()) ||
      person.number.includes(props.searched)
  );

  return (
    <div>
      {searchedPerson.map((person, index) => (
        <p key={person.name + index}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
