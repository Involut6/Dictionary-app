import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../App";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./Header.css";
import axios from "axios";

const Header = () => {
  const { inputValue, setInputValue } = useContext(SearchContext);
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setSearchValue(inputValue);
    setInputValue("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setSearchValue(inputValue);
      setInputValue("");
    }
  };

  const [response, setResponse] = useState(null);
  const [setError] = useState("");

  const onClick = e => {
    setSearchValue(e.target.textContent);
    setInputValue("");
  };

  const fetchSuggestion = async () => {
    if (inputValue) {
      try {
        const res = await axios.get(
          `https://api.datamuse.com/sug?s=${inputValue}`
        );
        setResponse(res.data);
      } catch (err) {
        setError(err);
      }
    }
  };
  useEffect(() => {
    fetchSuggestion();
  });

  return (
    <div className="header pad-40-left">
      <div className="title">
        <h1>Dictionary</h1>
        <p className="intro">Get familiar with words</p>
      </div>
      <div className="search">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            value={inputValue}
            onKeyDown={handleKeyDown}
          />
          <SearchRoundedIcon
            sx={{ fontSize: 30, color: "black" }}
            onClick={handleClick}
          />
        </div>
        <div className="suggestions">
          {inputValue &&
            response &&
            response.map(suggest => (
              <p onClick={onClick} className="suggestion" key={suggest.score}>
                {suggest.word}
              </p>
            ))}
        </div>
      </div>
      {searchValue && <p className="intro">Search result for {searchValue}:</p>}
      {/* {inputValue && <Suggestion />} */}
    </div>
  );
};

export default Header;
