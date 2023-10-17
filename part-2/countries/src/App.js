import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Statistics from './Statistics';

/* const params = {
  q: 'Helsinki',
  appid: process.env.REACT_APP_API_KEY,
};
 */
const App = (props) => {
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState('');
  const [searchedCountry, setSearchedCountry] = useState();

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setData(response.data);
    });
  }, []);
  //console.log(data, 'Countries data');

  /* useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get('http://api.weatherstack.com/current', {
        params,
      });
      console.log(response.data, 'weather data');
    };
    fetchWeather();
  }, []); */

  /* 
  useEffect(() => {
    const fetchWeather = async () => {
      const apiCall = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${API_key}`
      );

      const response = await apiCall.json();
      console.log(response);
    };
    fetchWeather();
  }, []);
 */
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
