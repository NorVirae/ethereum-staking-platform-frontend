import React from 'react';
import './App.css';

function App() {
  const name:string = "Hello";

  const getName = (name:string):string => {
    return name;
  }

  return (
    <div className="">
      Hello {getName("hello")}
    </div>
  );
}

export default App;
