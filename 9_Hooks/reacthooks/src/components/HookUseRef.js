import { useRef, useEffect, useState } from "react"

const HookUseRef = () => {

    const numberRef = useRef(0);
    const [counter,setCounter] = useState(0);
    const [counterB,setCounterB] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    })

    //useRef com DOM
    const inputRef = useRef();
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setText('')
        

        inputRef.current.focus();

    }
    
  return (
    <div>
        <h1>HookUseRef</h1>
        <p>O componente ref renderizou {numberRef.current} vezes.</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Alterar</button>
        {/* useRef com DOM */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default HookUseRef