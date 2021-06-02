import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import CountryList from "./components/CountryList";

function App() {
    
    const [filter, setFilter] = useState('')
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
    
    const showCountry = countryClicked => {
        setCountry(countryClicked)
    }
    
    
    const handleFilterChange = (event) => {
        setCountry([])
        let tempFilter = event.target.value
        tempFilter = '' ? new RegExp('[a-z]') : tempFilter
        console.log("Filter is ", tempFilter)
        setFilter(tempFilter)
        setCountriesToShow(countries.filter(x => x.name.toUpperCase().includes(tempFilter.toUpperCase())))
        
        console.log("filter is ", filter)
        console.log("countries are ", countries)
        console.log("countries to show are ", countriesToShow)
    }
    
    if (countriesToShow.length === 1 && country.length === 0) {
        setCountry(countriesToShow[0])
    }
    
    return (
        <div>
            <h1>welcome</h1>
            <form>
                <label> filter: </label>
                <input value={filter} onChange={handleFilterChange}/>
            </form>
            <CountryList
                countries={countriesToShow}
                showCountry={showCountry}
                country={country}
                setCountry={setCountry}/>
        </div>
    );
}

export default App;





