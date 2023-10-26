import { createContext, useState } from "react";

export const FetchContext = createContext()

export const FetchProvider = ({children}) =>{
    const [fetch, setFetch] = useState("API");
    const toogleFetch = () =>{
        setFetch( fetch === "API" ? "moked" : "API" )
        console.log("toogleFetch")
    }
    return (<FetchContext.Provider value = {{fetch,toogleFetch}}>
        {children}
        </FetchContext.Provider>)
}