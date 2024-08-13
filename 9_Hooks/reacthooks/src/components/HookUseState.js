import {useState} from "react";

const HookUseState = () => {

    let useNome = "João";
    const [nome, setNome] = useState('Guido');

    const mudar = () => {
        useNome = 'joao miguel'

        setNome('Guido Stocco');        
    }
    
    // useState em inputs
    const [age, setAge] = useState(18);
    
    // envio de formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        setAge('')
        console.log(age)
    }

    return(
        <div>
            <h2>Hook useState</h2>
            <p>Variável: {useNome}</p>
            <p>useState: {nome}</p>        
            <button onClick={mudar}>Mudar Nome</button>   
            <hr/>

            {/* useState em inputs */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="age">Digite sua Idade:</label><br/>
                <input type="text" value={age} name="age" onChange={(e) => setAge(e.target.value)}/>
                <p>Você tem {age} anos!</p>
                <input type="submit" value='Enviar' />
            </form>
        </div>
    )
};

export default HookUseState;