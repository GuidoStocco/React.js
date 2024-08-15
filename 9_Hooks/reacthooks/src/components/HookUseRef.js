import { useRef, useEffect, useState } from "react"

const HookUseRef = () => {

    const numberRef = useRef(0);
    const [counter,setCounter] = useState(0);
    const [counterB,setCounterB] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    })

  return (
    <div>
        <h1>HookUseRef</h1>
        <p>O componente ref renderizou {numberRef.current} vezes.</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Alterar</button>
    </div>
  )
}

export default HookUseRef