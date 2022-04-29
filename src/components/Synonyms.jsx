import React, { useContext } from 'react'
import { nanoid } from 'nanoid'
import './synonyms.css';
import { SearchContext } from '../App';

const Synonyms = ({ meaning }) => {

  const { setSearchValue} = useContext(SearchContext);

  const handleClick = (e) => {
    setSearchValue(e.target.textContent);
  }

  return (
    <div key={nanoid()} className="syns">
    {meaning.synonyms.length > 0? <h4>Synonyms</h4>: null}
    {meaning.synonyms.map(syn => 
        <div onClick={handleClick} key={nanoid()} className="syn">{syn}</div>
    )}
    </div>
  )
}

export default Synonyms