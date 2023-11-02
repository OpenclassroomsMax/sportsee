import React, { useContext } from 'react';
import { FetchContext } from '../../utils/context/FetchContext';
import "../ContextButton/ContextButton.css"


export default function ContextButton() {

    const {toogleFetch, fetch} = useContext (FetchContext)

    return (  
       <button className='button-mocked' onClick={()=> toogleFetch()}> data from {fetch === "API" ? "API" : "moked"} </button>
    );
}

