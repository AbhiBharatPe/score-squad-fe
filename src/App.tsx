import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const appID:string = "";
  const clintId:string = "";

  const handleLogOn = () =>{
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleLogOn}>
          Login Facebook
        </button>
      </header>
    </div>
  );
}

export default App;
