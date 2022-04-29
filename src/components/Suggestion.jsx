import React, { useContext, useState, useEffect } from 'react'
import { SearchContext } from "../App";
import axios from 'axios';


const Suggestion = () => {
    const { inputValue } = useContext(SearchContext);
    const [response, setResponse] = useState(null);
    const [setError] = useState("");

    const fetchSuggestion = async () => {
        if (inputValue) {
        
        try {
            const res = await axios.get(`https://api.datamuse.com/sug?s=${inputValue}`);
            setResponse(res.data);
        } catch (err) {
            setError(err);
        }
    }
    }
    useEffect(() => {
        fetchSuggestion();
    });

    console.log(response);

  return (
      <div>{response && <div className='suggestions'>{response.map(suggest => 
        <div className='suggestion' key={suggest.score}>{suggest.word}</div>)}</div>}</div>
  )
}

export default Suggestion;