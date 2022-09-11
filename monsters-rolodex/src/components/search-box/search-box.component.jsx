import { Component } from "react";

import './search-box.styles.css'

const SearchBox = ({className,placeHolder,OnChangehandler}) =>(

            <input 
            className = {`search-box ${className} `}
            type='search' 
            placeholder= {placeHolder} 
            onChange={OnChangehandler}/>
        );

export default SearchBox;