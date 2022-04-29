import React, { useContext } from 'react'
import './antonyms.css';
import { nanoid } from 'nanoid';
import { SearchContext } from '../App';

const Antonyms = ({ meaning }) => {

  const { setSearchValue} = useContext(SearchContext);

  const handleClick = (e) => {
    setSearchValue(e.target.textContent);
  }
  return (
    <div><div className="ants">
    {meaning.antonyms.length > 0? <h4>Antonyms</h4>: null}
    {meaning.antonyms.map(ant => 
        <div onClick={handleClick} key={nanoid()} className="ant">{ant}</div>
    )}
    </div></div>
  )
}

export default Antonyms