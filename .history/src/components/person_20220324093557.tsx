import React from 'react';

interface Props {
    name:string;
    age:number;
    email:string;
}

interface person

export const Person = ({props:Props}:Props) => {
    return (
        <div>
            <h1>{props.age}</h1>
        </div>
    )
}