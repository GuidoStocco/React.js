import { useState } from "react"
import "./MyForm.css"

const MyForm = () => {
    //Gerenciamento de dados
    const [name, setName] = useState();
    const[email, setEmail] = useState();

    const handleName = (e) => {
        console.log(e.target.value)
    }
        
    

  return (
    <div>
        <h2>Formulários</h2>
        {/* Criando formularios */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName}/>
            </div>
            {/*Label envolvendo o input  */}
            <label>
                <span>Email:</span>
                <input type="email" name="email" placeholder="Digite seu email" />
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm