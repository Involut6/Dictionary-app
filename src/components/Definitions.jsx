import React from 'react'

const Definitions = ({ meaning }) => {
  return (
    <div>
        <h3>{meaning.partOfSpeech}</h3>
        {meaning.definitions.map(def => 
        <div>
            <li>{def.definition}</li>
            {def.example?<span className="sample"><strong>Example:</strong> </span>:null}<span>{def.example}</span>
        </div>)}
    </div>
  )
}

export default Definitions