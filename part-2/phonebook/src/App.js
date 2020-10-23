import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const initialData = [
  { name: 'Ermias Asmelash', number: '0911 09 33 34' },
  { name: 'Zula Tiku', number: '0913 09 73 54' },
  { name: 'Titay Behailu', number: '0912 02 93 41' },
  { name: 'Haki Berhane', number: '0910 09 03 04' },
];
const App = (props) => {
  const [persons, setPersons] = useState(initialData);
  const [searched, setNewSearched] = useState('');

  const onNameSearched = (event) => {
    setNewSearched(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        searched={searched}
        onNameSearched={onNameSearched}
      />
      <h2>add a new</h2>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h2>Numbers</h2>
      <Persons persons={persons} searched={searched}></Persons>
    </div>
  );
};

export default App;
