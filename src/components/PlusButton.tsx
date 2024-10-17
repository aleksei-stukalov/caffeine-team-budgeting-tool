import React, { useState } from 'react';

const _placeHolder = () => {

    return (<div>Hello World</div>)
}

export default function PlusButton(props) {


    const handleClick = () => {
        setPlaceHolder(_placeHolder);
        
    };

    return (
        <button
            {...props}
           // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
            +
        </button>
    );
}
