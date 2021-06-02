import CountryPage from "./CountryPage";
import React from "react";


const CountryList = ({countries, showCountry, country}) => {
    
    //if country has been set...return that country page
    if (country.length !== 0) {
        return (
            <div>
                <CountryPage country={country}/>
            </div>
        )
        //otherwise figure out if there should be a list and display it
    } else if (countries.length > 10) {
        return (
            <p>too many countries to list</p>
        )
    } else if (countries.length > 1) {
        return (
            <div>
                {countries.map(x =>
                    <p key={x.name}>
                        {x.name}
                        <button onClick={()=>showCountry(x)}>show</button>
                    </p>)}
            </div>
        )
    } else {
        return (
            <p>no matches</p>
        )
        
    }
}

export default CountryList