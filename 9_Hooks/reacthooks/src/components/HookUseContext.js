import { createContext } from "react"
 
export const SomeContext = createContext();

export const HookUseContext = ({children}) => {

    const contextValue = "Valor do contexto";

    return(
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )


}