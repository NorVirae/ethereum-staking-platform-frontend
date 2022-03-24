import React from 'react';
import './App.css';
import { Person } from './components/person';

function App() {
  const name:string = "Hello";

  interface Props {
    name:string;
    age:number;
    eamil:string;
  }

  const getName = (name:string):string => {
    return name;
  }

  return (
    <div className="">
       {getName("hello")}

       <Person props={{name:"hello", age:}} />
    </div>
  );
}

export default App;
