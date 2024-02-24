const FilterBar = ({ onChange, placeholder, onClick, value }) => {
    return (
        <div className="select-container" >
            <label htmlFor="search-input">Search: </label>
            <input
                className="select-input"  
                name="search-input"
                id="search-bar-input"
                type="text"
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
            <button onClick={onClick} className="searchButton" >Clear</button>
        </div>
    );
};

export default FilterBar;