import React from 'react'
import { nanoid } from 'nanoid'
import './synonyms.css';

const Synonyms = ({ meaning }) => {
  return (
    <div key={nanoid()} className="syns">
    {meaning.synonyms.length > 0? <h4>Synonyms</h4>: null}
    {meaning.synonyms.map(syn => 
        <div key={nanoid()} className="syn">{syn}</div>
    )}
    </div>
  )
}

export default Synonyms