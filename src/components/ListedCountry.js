import React from "react";

const ListedCountry = (props) => {
    
    return (
        <p>{props.name}
            <button onClick={props.showCountryButton}>show</button>
        </p>
    )
    
}

export default ListedCountry