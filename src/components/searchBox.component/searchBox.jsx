import React from 'react';
import './searchBox.style.css';


export const SearchBox = ({handleChange,placeholder}) => {
    return (
    <input className = 'search' type='search' onChange={handleChange} placeholder={placeholder}/>
    )

}