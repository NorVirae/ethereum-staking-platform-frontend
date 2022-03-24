import React from 'react';

interface Props {
    name:string;
    age:number;
    email:string;
}

export const Person = ({props;}) => {
    return (
        <div>
            <h1>{props.age}</h1>
        </div>
    )
}