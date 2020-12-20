import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Statistics from './Statistics';

const App = () => {
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState('');
  const [searchedCountry, setSearchedCountry] = useState();

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setData(response.data);
    });
  }, []);

  const countryNames = data.map((d, index) => d.name);

  const searchHandler = (event) => {
    event.preventDefault();

    setSearched(event.target.value);

    if (event.target.value !== '') {
      const country = countryNames.filter((l) =>
        l.toLowerCase().includes(searched.toLowerCase())
      );
      setSearchedCountry(country);
    }
  };

  return (
    <div>
      <p>
        find countries <input value={searched} onChange={searchHandler}></input>
      </p>
      {searched !== '' && (
        <Statistics searchedCountry={searchedCountry} data={data} />
      )}
    </div>
  );
};

export default App;
