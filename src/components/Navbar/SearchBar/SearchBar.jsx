import { useState } from "react";
import "./SearchBar.css";
import searchicon from '../../../assets/search-logo.png'

function SearchBar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className="search-bar">
            <div className={`search-container ${isSearchOpen ? "open" : ""}`}>
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="search-input"
                />
                <button className="search-icon" onClick={toggleSearch}>
                    <img src={searchicon} alt="" />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;