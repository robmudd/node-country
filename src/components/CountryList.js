import CountryPage from "./CountryPage";
import React from "react";
import ListedCountry from "./ListedCountry";

const CountryList = ({countries, showCountry, country, setCountry}) => {
    console.log("COUNTRY IS ", country)
    console.log("country length is", country.length)
    
    if (country.length !== 0) {
        return (
            <div>
                <CountryPage country={country}/>
            </div>
        )
    } else if (countries.length > 10) {
        return (
            <p>too many countries to list</p>
        )
    } else if (countries.length > 1) {
        return (
            <div>
                {countries.map(x => <ListedCountry key={x.name} name={x.name}
                                                   showCountryButton={() => showCountry(x)}/>)}
            </div>
        )
    } else {
        return (
            <p>no matches</p>
        )
        
    }
}

export default CountryList