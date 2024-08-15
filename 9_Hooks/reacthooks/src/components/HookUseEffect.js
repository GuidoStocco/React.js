import { useEffect, useState } from "react";


const HookUseEffect = () => {
    //useEffect sem dependências
    useEffect(() => {
        console.log("Estou sendo executado")
    })

    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        setNumber(number * 2);


    }

    return(
        <div>
            <hr/>
            <h1>UseEffect</h1>
            <p>Número: {number}</p>
            <button onClick={changeNumber}>Alterar Número!</button>
            <hr/>
        </div>
    )
};

export default HookUseEffect;