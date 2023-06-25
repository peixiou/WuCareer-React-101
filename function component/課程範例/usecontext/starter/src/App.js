import './App.css';
import Card from './components/Card';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState('Winny')

  return (
    <div className="App">
      <Card user={user}/>
    </div>
  );
}

export default App;
