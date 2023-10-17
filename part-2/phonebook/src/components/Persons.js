import React from 'react';

const Persons = ({ persons, searched }) => {
  const searchedPerson = persons.filter(
    (person) =>
      person.name.toLowerCase().includes(searched.toLowerCase()) ||
      person.number.includes(searched)
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
