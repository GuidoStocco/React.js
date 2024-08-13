import { useReducer } from "react";


const HookUseReducer = () => {

    const [number, despetch] = useReducer((state, action) => {
        return Math.random(state)
    })

    return( 
        <div>
            <h1>UseReducer</h1>
        </div>
    )
};

export default HookUseReducer;