import React, { useState } from 'react';

const Country = ({ country, data }) => {
  const [currentCountry] = country;
  const { population, capital, languages, flag } = data.find((c) => {
    return c.name.toLowerCase() === currentCountry.toLowerCase();
  });

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
    </div>
  );
};

const Statistics = (props) => {
  const [countryName, setCountryName] = useState('');
  const clickedCountryArray = countryName !== '' && [countryName];

  if (props.searchedCountry.length > 10) {
    return (
      <div>
        <h2>statistics</h2>
        Too many matches, specify another filter
      </div>
    );
  }
  if (props.searchedCountry.length === 1) {
    return <Country country={props.searchedCountry} data={props.data} />;
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
      {countryName !== '' && (
        <Country country={clickedCountryArray} data={props.data} />
      )}
    </div>
  );
};

export default Statistics;
