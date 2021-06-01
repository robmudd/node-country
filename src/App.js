import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";

function App() {
    
    const [filter, setFilter] = useState ('')
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState([])
    const [countriesToShow, setCountriesToShow] = useState([])
  
  const hook = () => {
    axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(response => {
          setCountries(response.data)
          
        })
  }
    useEffect(hook, [])
    
    const showCountry = (id) => {
        console.log(id)
        
        for (const country of countries) {
            if(country.id === id) {
                console.log(country)
                setCountriesToShow(country)
                console.log(countriesToShow)
            }
        }
        console.log(countriesToShow)
    }
    
 /*   const countriesToShow = countries.filter(x => x.name.toUpperCase().includes(filter.toUpperCase()))*/

    
  
    const handleFilterChange = (event) => {
        let tempFilter = event.target.value
        tempFilter = '' ? new RegExp('[a-z]') : tempFilter
        console.log("Filter is ", tempFilter)
        setFilter(tempFilter)
        setCountriesToShow(countries.filter(x => x.name.toUpperCase().includes(tempFilter.toUpperCase())))
        console.log("filter is ", filter)
        console.log("countries are ", countries )
        console.log("countries to show are ", countriesToShow)
    }
  
  
  

  return (
      <div>
        <h1>welcome</h1>
          <form>
              <label> filter: </label>
              <input value={filter} onChange={handleFilterChange}/>
          </form>
          <CountryList countries={countriesToShow} showCountry={showCountry}/>
      </div>
  );
}

export default App;

const CountryList = ({countries, showCountry}) => {

    if (countries.length > 10) {
        return (
            <p>too many countries to list</p>
        )
    } else if (countries.length > 1) {
        return (
            <div>
                {countries.map(x => <p key={x.name}>{x.name} <button onClick={showCountry}>show</button> </p> )}
            </div>
        )
    } else if (countries.length === 1){

        console.log("countries length is ", countries.length)
        console.log("country name is", countries[0].name);
        return (
            <div>
            <CountryPage country = {countries[0]} />
            </div>
        )
    } else {
        return (
            <p>no matches</p>
        )
        
    }
}

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
/*

const CountryButton = (props) => {
    const handeClick = () => {
        setFilter(props.country)
    }
    
    return(
        <button onClick={props.onClick}>hello</button>
    )
}*/
