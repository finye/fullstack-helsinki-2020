import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_key = process.env.REACT_APP_API_KEY;

const Country = ({ country, data }) => {
  const [weatherData, setWeatherData] = useState('');
  const [wind, setWind] = useState('');
  const [icon, setIcon] = useState('');
  const [currentCountry] = country;
  const { population, capital, languages, flag } = data.find((c) => {
    return c.name.toLowerCase() === currentCountry.toLowerCase();
  });

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_key}&units=metric`
      )

      .then((response) => {
        setWeatherData(response.data.main.temp);
        setWind(response.data.wind.speed);
        console.log('weather data', response.data.main.temp);
        console.log('response from weather', response.data);
        console.log(response.data.weather[0].icon);
        setIcon(response.data.weather[0]);
      });
  }, [capital]);

  return (
    <div>
      <b>{currentCountry} </b>
      <p> population {population} </p>
      <p> capital {capital} </p>
      <b>Languages</b>
      {languages.map((l) => {
        return <ol key={l.name.toUpperCase()}> {l.name} </ol>;
      })}
      <img style={{ width: 200, height: 200 }} src={flag} alt='Flag'></img>
      <br />
      <b>Temperature: {Math.round(weatherData)} &deg;C </b> <br />
      <img
        alt='Weather'
        src={`http://openweathermap.org/img/w/${icon.icon}.png`}
      ></img>{' '}
      {icon.description}
      <br /> <br />
      <b>Wind: {wind} m/s</b>
    </div>
  );
};

const Statistics = (props) => {
  const [countryName, setCountryName] = useState();
  const clickedCountryArray = countryName && [countryName];

  if (props.searchedCountry.length > 10) {
    return (
      <div>
        <h2>statistics</h2>
        Too many matches, specify another filter
      </div>
    );
  }

  if (props.searchedCountry.length === 1) {
    return (
      <div>
        <Country
          country={props.searchedCountry}
          data={props.data}
          weatherData={props.weatherData}
        />
      </div>
    );
  }

  return (
    <div>
      {props.searchedCountry.map((name, index) => (
        <div key={name.split(' ').join('-').toLowerCase() + index}>
          {name}
          <button
            onClick={() => {
              setCountryName(name);
            }}
          >
            show
          </button>
        </div>
      ))}

      {countryName && (
        <Country country={clickedCountryArray} data={props.data} />
      )}
    </div>
  );
};

export default Statistics;
