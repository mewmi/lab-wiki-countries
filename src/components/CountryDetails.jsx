import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const { id } = useParams();
  const { countries } = props;
  const country = countries.find((item) => {
    return id === item.alpha3Code;
  });

  return (
    (country && (
      <div className="col-7">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt={`{country.name.official}`}
        />
        <h1>{country.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital.join(', ')}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            {(country.borders.length && (
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((borderCode) => {
                      const borderCountry = countries.find((item) => {
                        return borderCode === item.alpha3Code;
                      });
                      return (
                        <li key={borderCode}>
                          <Link to={`/${borderCode}`}>
                            {borderCountry.name.official}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            )) ||
              null}
          </tbody>
        </table>
      </div>
    )) || (
      <div>
        <h1>Country not found</h1>
      </div>
    )
  );
};

export default CountryDetails;
