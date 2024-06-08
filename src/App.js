import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize the dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    // Search for the word in the dictionary (case-insensitive)
    const foundWord = dictionary.find(
      item => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h2>Definition:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
