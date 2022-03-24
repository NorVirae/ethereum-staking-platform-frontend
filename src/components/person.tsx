import React, { useState } from 'react';

interface Props {
    name?:string;
    age?:number;
    email?:string;
}

interface Person {
    props:Props
}

export const Person:React.FC<Person> = ({props}) => {
    const [country, setCountry] = useState<string>("")
    return (
        <div>
            <h1>{props.age} {props.name}</h1>
            <button onClick={e=>setCountry("This is BTN")}>Cick here</button>
        </div>
    )
}