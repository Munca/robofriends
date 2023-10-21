import React from "react"
import "./search-box.css"

interface SearchBoxConfig {
    hint: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>)=> void;
}

const SearchBox = ({hint, onChangeHandler}:SearchBoxConfig)=> {
    return(
        <input className="search-box" 
        type="search" 
        placeholder={hint} 
        onChange={onChangeHandler} />
    )
}

export default SearchBox;