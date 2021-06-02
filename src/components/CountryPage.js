import React from "react";

const CountryPage = ({country}) => {
    console.log("country page country is", country)
    return (
        <div>
            <div>
                <h1>{country.name}</h1>
            </div>
            <div>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
            </div>
            <div>
                <h3>languages:</h3>
            </div>
            <div>
                <ul>
                    {country.languages.map(x => <li key={x.name}>{x.name}</li>)}
                </ul>
                <img src={country.flag} width="150px" alt="country flag"/>
            </div>
        
        </div>
    
    )
}

export default CountryPage