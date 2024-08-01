import "./MyForm.css"

const MyForm = () => {
  return (
    <div>
        <h2>Formulários</h2>
        {/* Criando formularios */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome"/>
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm