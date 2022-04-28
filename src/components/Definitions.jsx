import React from 'react'
import { nanoid } from 'nanoid'

const Definitions = ({ meaning }) => {
  return (
    <div>
        <h3>{meaning.partOfSpeech}</h3>
        {meaning.definitions.map(def => 
        <div key={nanoid()}>
            <li key={nanoid()}>{def.definition}</li>
            {def.example?<span className="sample"><strong>Example:</strong> </span>:null}<span key={nanoid()}>{def.example}</span>
        </div>)}
    </div>
  )
}

export default Definitions