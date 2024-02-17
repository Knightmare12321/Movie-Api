const FilterBar = ({ onChange, placeholder, onClick, value }) => {
    return (
        <div className="select-container" >
            <input
                className="select-input"
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