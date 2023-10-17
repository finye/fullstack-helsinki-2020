import React, { useState } from 'react';

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const nameExists =
      persons.filter((person) => person.name === newName).length > 0;

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(nameObject));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          number:{' '}
          <input
            name='contactNumber'
            type='number'
            value={newNumber}
            onChange={onNumberChange}
          />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
