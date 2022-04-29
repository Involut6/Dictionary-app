import React from 'react'
import './antonyms.css';
import { nanoid } from 'nanoid';

const Antonyms = ({ meaning }) => {
  return (
    <div><div className="ants">
    {meaning.antonyms.length > 0? <h4>Antonyms</h4>: null}
    {meaning.antonyms.map(ant => 
        <div key={nanoid()} className="ant">{ant}</div>
    )}
    </div></div>
  )
}

export default Antonyms