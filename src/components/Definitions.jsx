import React from 'react'
import { nanoid } from 'nanoid'
import './definitions.css';

const Definitions = ({ meaning }) => {
  return (
    <div className='definition'>
        <h2>{meaning.partOfSpeech}</h2>
        {meaning.definitions.map(def => 
        <div key={nanoid()}>
            <strong><li key={nanoid()}>{def.definition}</li></strong>
            {def.example?<span className="sample"><strong>Example:</strong> </span>:null}<span key={nanoid()}>{def.example}</span>
        </div>)}
    </div>
  )
}

export default Definitions