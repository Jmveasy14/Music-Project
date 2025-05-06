import React, { useState } from 'react';
import './App.css';

function App() {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // placeholder mood → genre logic
    const moodToGenre = {
      happy: 'Pop',
      sad: 'R&B',
      angry: 'Rock',
      chill: 'Lo-fi',
    };

    const genre = moodToGenre[mood.toLowerCase()] || 'Hip-Hop';
    setRecommendation(`You seem ${mood}. Try listening to some ${genre}. 🎧`);
  };

  return (
    <div className="App">
      <h1>Moodify 🎵</h1>
      <form onSubmit={handleSubmit}>
        <label>
          What's your mood?
          <input type="text" value={mood} onChange={handleMoodChange} placeholder="e.g., happy, sad, chill" />
        </label>
        <button type="submit">Get Recommendation</button>
      </form>
      <p>{recommendation}</p>
    </div>
  );
}

export default App;
