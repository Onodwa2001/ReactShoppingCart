import { useState } from "react"


function SearchBar(props) {
    return(
        <div className="searchBar">
            <input type="text" onChange={props.getValue} value={props.searchValue} name="search" placeholder="Search for item" />
            <button onClick={props.search} type="">Search</button>
        </div>
    )
}

export default SearchBar
