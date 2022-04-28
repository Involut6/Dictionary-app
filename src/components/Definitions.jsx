import React from 'react'
import { nanoid } from 'nanoid'

const Definitions = ({ meaning }) => {
  return (
    <div>
        <h3>{meaning.partOfSpeech}</h3>
        {meaning.definitions.map(def => 
        <div key={nanoid()}>
            <strong><li key={nanoid()}>{def.definition}</li></strong>
            {def.example?<span className="sample"><strong>Example:</strong> </span>:null}<span key={nanoid()}>{def.example}</span>
        </div>)}
    </div>
  )
}

export default Definitions