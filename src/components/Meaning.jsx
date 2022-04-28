import Antonyms from "./Antonyms";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";

const Meaning = ({ data }) => {
  return (
    <div>
        {data && data.map(result => result.meanings.map(meaning => 
            <div>
                <Definitions meaning={meaning} />
                <Synonyms meaning={meaning}/>
                <Antonyms meaning={meaning}/>
                <hr></hr>
            </div>
        ))}
    </div>
  )
        }

export default Meaning;