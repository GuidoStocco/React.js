import { useState } from "react"
import "./MyForm.css"

const MyForm = () => {
    //Gerenciamento de dados
    const [name, setName] = useState();
    const[email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    }
    
    // Envio de formulario onSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name,email)
    }
        

  return (
    <div>
        <h2>Formulários</h2>
        {/* Criando formularios */}
        {/* 5- Envio de formulario com onSubmit */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName}/>
            </div>
            {/*Label envolvendo o input  */}
            <label>
                <span>Email:</span>
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => {setEmail(e.target.value)}}/>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm