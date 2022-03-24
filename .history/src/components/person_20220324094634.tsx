import React from 'react';

interface Props {
    name?:string;
    age?:number;
    email?:string;
}

interface Person {
    props:Props
}

export const Person:React.Fc<Person> = ({name, age, email}) => {
    return (
        <div>
            <h1>{props.age} {props.name}</h1>
        </div>
    )
}