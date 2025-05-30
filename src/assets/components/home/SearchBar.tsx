import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//API helper functions
import {
    getPlayerById,
    getMatchData,
} from "../../../modules/api_interactions/main";
import { HeroIdConstants } from "../../../constants/heroConstants";
import type { BasicHero } from "../../../interfaces/HeroInterfaces";

function SearchBar() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchType, setSearchType] = useState<string>("Player");

    //navigation
    const navigate = useNavigate();

    function handleSearch(): void {
        // Handle the search logic here
        if (searchValue.trim() === "") {
            console.log("Please enter a search term.");
            return;
        } else {
            handleSearchRequest(searchType);
        }
    }

    // handle search request based on drop-down menu selection
    async function handleSearchRequest(queryType: string): Promise<void> {
        try {
            const trimmedSearchValue = searchValue.trim();
            switch (queryType) {
                case "Player":
                    //fetch player
                    console.log("fetching player");
                    // this is needed for the toast notification.. alternative: fetch after routing.. but on error we would need to redirect.. so it's still 1 call for another
                    await getPlayerById(searchValue.trim());
                    navigate(`/player-profile/${trimmedSearchValue}`);
                    break;
                case "Match":
                    //fetch match
                    console.log("fetching match");
                    await getMatchData(trimmedSearchValue);
                    navigate(`/matchdetails/${trimmedSearchValue}`);
                    break;
                case "Hero":
                    //search for hero name, if match found.. fetch.. saves API calls :D
                    const hero = HeroIdConstants.find((hero: BasicHero) => {
                        console.log(
                            hero.name.replace(/_/g, "").toLowerCase().slice(11),
                            trimmedSearchValue.toLowerCase().replace(/ /g, "")
                        );
                        return (
                            hero.name
                                .replace(/_/g, "")
                                .toLowerCase()
                                .slice(11) ==
                            trimmedSearchValue.toLowerCase().replace(/ /g, "")
                        );
                    });

                    if (!hero) {
                        throw new Error("invalid hero name");
                    }

                    navigate(`/hero/${hero?.id}`);
                    break;
            }
        } catch (error) {
            console.error("There was an issue with your request. ", error);
            toast.error(`${searchType} not found!`, {
                iconTheme: {
                    primary: "#ffffff",
                    secondary: "#732f81",
                },
            });
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
                        <option value="Player">Player</option>
                        <option value="Match">Match</option>
                        <option value="Hero">Hero</option>
                    </select>
                </div>
                <div id="search-button" onClick={handleSearch}>
                    <BiSearch id="search-icon" />
                </div>
                <Toaster />
            </div>
        </>
    );
}

export default SearchBar;
