import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../App';
import Meaning from "./Meaning";
import Word from "./Word";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const Result = () => {


    const { searchValue } = useContext(SearchContext);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res = await axios(`/${param}`);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
      if (searchValue) {
          fetchData(searchValue);
      }
    }, [searchValue]);

    if (loading) {
        return <h1 className='loading'>Please wait...</h1>
    }

    if (error) {
        return <h1 className='error'>Word not found!</h1>
    }

    console.log(response)
  return (
    <div className='result pad-40-left'>
        <Word data={response} />
        <Meaning data={response} />
    </div>
  )
}

export default Result;