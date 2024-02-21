// Watch Button


function WatchButton({ characterObj, remove, handleWatchClick }) {
    function handleAddWatch() {
        handleWatchClick(true, characterObj);
    }
  
    function handleRemoveWatch() {
        handleWatchClick(false, characterObj);
    }
  
    return (
        <>
            {remove === false ? (
            <button onClick={handleAddWatch}>Add To Watchlists</button>
            ) : (
            <button onClick={handleRemoveWatch}>Remove From Watchlists</button>
            )}
        </>
    );
  }
  
  WatchButton.defaultProps = {
    remove: false,
  };
  
  export default WatchButton;
  