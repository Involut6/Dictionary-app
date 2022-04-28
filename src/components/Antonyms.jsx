import React from 'react'

const Antonyms = ({ meaning }) => {
  return (
    <div><div className="ants">
    {meaning.antonyms.length > 0? <h4>Antonyms</h4>: null}
    {meaning.antonyms.map(ant => 
        <div className="ant">{ant}</div>
    )}
    </div></div>
  )
}

export default Antonyms