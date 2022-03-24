import React from 'react';

interface Props {
    name?:string;
    age?:number;
    email?:string;
}

interface Person {
    props:Props
}

export const Person:React.FC<Person> = ({props}) => {
    const [country, setCountry]
    return (
        <div>
            <h1>{props.age} {props.name}</h1>
        </div>
    )
}