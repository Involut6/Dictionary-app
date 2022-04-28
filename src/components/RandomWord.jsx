import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Word from "./Word";

const RandomWord = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchRandomWord = async () => {
        
        try {
            const res = await axios.get("https://random-words-api.vercel.app/word");
            setResponse(res.data);
        } catch (err) {
            setError(err);
        }
    }
    useEffect(() => {
        if (!response) {
        fetchRandomWord();}
    }, [response]);

    return (
        <div  className='random'>
            {response && (
                <Word random={response}/>
            )
            }
        </div>
    )

}

export default RandomWord;