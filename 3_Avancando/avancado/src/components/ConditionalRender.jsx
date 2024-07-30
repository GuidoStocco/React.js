import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name] = useState("João");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}

        {/* if e else no jsx/ condição ? bloco : bloco 2 */}
        {name === "João" ? (
            <div>
                <p>O nome é joão</p>
            </div>    
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>    
        )}

    </div>
  )
}

export default ConditionalRender