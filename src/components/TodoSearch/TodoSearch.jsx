import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoSearch.css';

export function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div id="search-container">
            <input
                placeholder="Buscar tarea" 
                id="search"
                onChange={onSearchValueChange}
                value={searchValue}
                autoComplete="off"
            />
            <div className="line"></div>
        </div>
    );
}