import { useState } from "react";

function SearchBar() {
    const [searchValue, setSearchValue] = useState<string>("");

    function handleSearch() {
        // Handle the search logic here
        if (searchValue.trim() === "") {
            console.log("Please enter a search term.");
            return;
        } else {
            console.log("Searching for:", searchValue);
        }
    }

    return (
        <div id="search-bar-container">
            <input
                type="text"
                id="search-bar"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <button id="search-button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
