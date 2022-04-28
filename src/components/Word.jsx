import React from 'react'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';

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
          <h1>{data[0].word.toUpperCase()}</h1>
          <VolumeUpRoundedIcon onClick={pronounce}/>
          <p>{data[0].phonetic === ""? data.map(phonetic => phonetic.phonetic): data[0].phonetic}</p>
      </div>: (random && <div>
                    <h1>New word</h1><LightbulbSharpIcon sx={{color: "aqua"}} />
                    <h2>{random[0].word}:</h2>
                    <h4>{random[0].definition}</h4>
                    <p>Pronunciation: {random[0].pronunciation}</p>
                </div>)}
    </div>
  )
}

export default Word;