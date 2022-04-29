import { createContext, useState } from "react";
import Header from "./components/Header"
import './App.css';
import Result from "./components/Result";
import RandomWord from "./components/RandomWord";


export const SearchContext = createContext();

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const search = {
    searchValue, setSearchValue, inputValue, setInputValue
  }

  return (
    <SearchContext.Provider value={search}>
    <div className="App">
      <Header />
     {!searchValue && <RandomWord />}
      <Result />
    </div>
    </SearchContext.Provider>
  );
}

export default App;
