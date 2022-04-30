import React from 'react'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';
import './word.css';

const Word = ({ data, random }) => {

  const pronounce = () => {
    for (let i=0; i<data.length; i++) {
      for (let j=0; j<data[i].phonetics.length; j++) {
        if(data[i].phonetics[j].audio !== "") {
          let audio = new Audio(data[i].phonetics[j].audio);
          audio.play();
          return;
        }
      } 
    }
}

  return (
    <div>
      {data ? <div className='word'>
          <span className='searchWord'>{data[0].word.toUpperCase()}</span>
          <VolumeUpRoundedIcon sx={{ fontSize: 30 }} onClick={pronounce}/>
          <p className='phonetic'>{data[0].phonetic === ""? data.map(phonetic => phonetic.phonetic): data[0].phonetic}</p>
      </div>: (random && <div>
                    <span className='newWord'>New word</span><LightbulbSharpIcon sx={{color: "aqua", fontSize: 30}} />
                    <h2>{random[0].word}</h2>
                    <span>Meaning: </span><span>{random[0].definition}</span>
                    <p>Pronunciation: {random[0].pronunciation}</p>
                </div>)}
    </div>
  )
}

export default Word;