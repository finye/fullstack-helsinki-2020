import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searched, setNewSearched] = useState('');

  useEffect(() => {
    /*     console.log('effect');
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promise fulfilled');
      setPersons(response.data);
    }) */

    const fetchPersons = async () => {
      const url = 'http://localhost:3001/persons';
      const response = await axios.get(url);

      setPersons(response.data);
    };

    fetchPersons();
  }, []);

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
