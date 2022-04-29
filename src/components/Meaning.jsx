import Antonyms from './Antonyms';
import Definitions from './Definitions';
import Synonyms from "./Synonyms";
import { nanoid } from 'nanoid';
import './meaning.css';

const Meaning = ({ data }) => {
  return (
    <div>
        {data && data.map(result => result.meanings.map(meaning => 
            <div className="meaning" key={nanoid()}>
                <Definitions key={nanoid()} meaning={meaning} />
                <Synonyms key={nanoid()} meaning={meaning}/>
                <Antonyms key={nanoid()} meaning={meaning}/>
            </div>
        ))}
    </div>
  )
        }

export default Meaning;