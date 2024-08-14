import { useReducer } from "react";


const HookUseReducer = () => {

    const [number, despetch] = useReducer((state, action) => {
        return Math.random(state)
    })

    return( 
        <div>
            <h1>UseReducer</h1> 
            <p>Número: {number}</p>    
            <button onClick={despetch}>Alterar o número!</button>
            <hr/>
        </div>
    )
};

export default HookUseReducer;