import { useState } from "react"
import "./MyForm.css"

const MyForm = () => {
    //Gerenciamento de dados
    const [name, setName] = useState("");
    const[email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    }
    
    // Envio de formulario onSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name,email,bio,role)

        // limpando formulário
        setName("");
        setEmail("");
        setBio("")
        setRole("")
    }
        

  return (
    <div>
        <h2>Formulários</h2>
        {/* Criando formularios */}
        {/* 5- Envio de formulario com onSubmit */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            </div>
            {/*Label envolvendo o input  */}
            <label>
                <span>Email:</span>
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
            </label>

            <label>
                <span>Bio</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => {setBio(e.target.value)}} value={bio}></textarea>
            </label>

            {/* select */}
            <label>
                <span>função do sistema</span>
                <select name="role" onChange={(e) => {setRole(e.target.value)}} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="adm">Administrador</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm