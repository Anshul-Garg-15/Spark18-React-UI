import React from 'react';
import './App.css';
import firstComponent from './components/firstComponent';
import secondComponent from './components/secondComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <firstComponent />
      <secondComponent />
      </header>
    </div>
  );
}

export default App;
