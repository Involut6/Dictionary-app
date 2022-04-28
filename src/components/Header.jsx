import { useContext, useState } from "react";
import { SearchContext } from "../App";
import "./Header.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleClick = e => {
    setSearchValue(inputValue);
    setInputValue("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setSearchValue(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="header pad-40-left">
      <div className="title">
        <h1>Dictionary</h1>
        <p className="intro">Get familiar with words</p>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={inputValue}
          onKeyDown={handleKeyDown}
        />
        <SearchRoundedIcon sx={{ fontSize: 40, color: "black" }} onClick={handleClick} />
      </div>
      {searchValue && <p className="intro">Search result for {searchValue}:</p>}
    </div>
  );
};

export default Header;
