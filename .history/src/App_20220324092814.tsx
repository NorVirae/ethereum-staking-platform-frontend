import React from 'react';
import './App.css';

function App() {
  const name:string = "Hello";

  interface Props {
    name:string
  }

  const getName = (name:string):string => {
    return name;
  }

  return (
    <div className="">
       {getName("hello")}
    </div>
  );
}

export default App;
