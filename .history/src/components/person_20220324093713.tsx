import React from 'react';

interface Props {
    name?:string;
    age?:number;
    email:string;
}

interface Person {
    props:Props
}

export const Person = ({props}:Person) => {
    return (
        <div>
            <h1>{props.age}</h1>
        </div>
    )
}