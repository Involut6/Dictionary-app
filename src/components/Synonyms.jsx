import React from 'react'

const Synonyms = ({ meaning }) => {
  return (
    <div className="syns">
    {meaning.synonyms.length > 0? <h4>Synonyms</h4>: null}
    {meaning.synonyms.map(syn => 
        <div className="syn">{syn}</div>
    )}
    </div>
  )
}

export default Synonyms