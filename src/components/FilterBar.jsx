const FilterBar = ({ placeholder, onClick, value, onChange }) => {
    return (
        <div className="select-container">
            <label htmlFor="search-input">Search: </label>
            <input
                className="select-input"  
                name="search-input"
                id="search-bar-input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange} // Add this line
            />
            <button className="search-button" onClick={onClick}>Search</button>
        </div>
    );
};

export default FilterBar;