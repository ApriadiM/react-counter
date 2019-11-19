
import React from 'react';
import Class from './components/CounterClass'
import Function from './components/CounterFunction'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Function</h1>
        <Function />
        <h1>Class</h1>
        <Class />
    </div>
  );
}

export default App;