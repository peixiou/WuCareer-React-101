import './App.css';
import Card from './components/Card';
import React, { createContext, useState } from 'react';

export const userContext = createContext()

function App() {
  const [user, setUser] = useState({
    user: 'Winny',
    gender: "F"
  })

  return (
    <userContext.Provider value={user}>
      <div className="App">
        <Card/>
      </div>
    </userContext.Provider>
  );
}

export default App;
