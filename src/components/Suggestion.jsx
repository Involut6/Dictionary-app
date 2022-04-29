import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../App";
import axios from "axios";
import "./suggestions.css";

const Suggestion = () => {
  const { inputValue, setInputValue, setSearchValue } = useContext(SearchContext);
  const [response, setResponse] = useState(null);
  const [setError] = useState("");

  const handleClick = (e) => {
      setSearchValue(e.target.textContent);
      setInputValue("");
  }

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
    <>
      {response && (
        <div  className="suggestions">
          {response.map(suggest => (
            <p onClick={handleClick} className="suggestion" key={suggest.score}>
              {suggest.word}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Suggestion;
