import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchType, setSearchType] = useState<string>("player");

    function handleSearch() {
        // Handle the search logic here
        if (searchValue.trim() === "") {
            console.log("Please enter a search term.");
            return;
        } else {
            console.log(
                "Searching for: ",
                searchValue,
                " in type: ",
                searchType
            );
        }
    }

    return (
        <>
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
                <div>
                    <select
                        id="search-type-menu"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                    >
                        <option value="player">Player</option>
                        <option value="match">Match</option>
                        <option value="hero">Hero</option>
                    </select>
                </div>
                <div id="search-button" onClick={handleSearch}>
                    <BiSearch id="search-icon" />
                </div>
            </div>
        </>
    );
}

export default SearchBar;
