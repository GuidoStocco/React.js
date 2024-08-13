import {useState} from "react";

const HookUseState = () => {

    let useNome = "João";
    const [nome, setNome] = useState('Guido');

    const mudar = () => {
        useNome = 'joao miguel'

        setNome('Guido Stocco');        
    }
    
    

    return(
        <div>
            <h2>Hook useState</h2>
            <p>Variável: {useNome}</p>
            <p>useState: {nome}</p>        
            <button onClick={mudar}>Mudar Nome</button>   
            <hr/>
        </div>
    )
};

export default HookUseState;