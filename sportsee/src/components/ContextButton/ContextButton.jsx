import React, { useContext } from 'react';
import { FetchContext } from '../../utils/context/FetchContext';



export default function ContextButton() {

    const {toogleFetch, fetch} = useContext (FetchContext)

    return (  
       <button onClick={()=> toogleFetch()}> data from {fetch === "API" ? "API" : "moked"} </button>
    );
}

