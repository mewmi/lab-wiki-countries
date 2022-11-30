import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <CountryDetails countries={countries} />
        </div>
      </div>
    </div>
  );
}

export default App;
