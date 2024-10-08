import {useState} from 'react'
import { usePrevious } from '../Hooks/usePrevious'

const HookCustom = () => {

    const [number, setNumber] = useState(0);
    const previousValue = usePrevious(number);

  return (
    <div>
        <h1>HookCustom</h1>
        <p>Atual{number}</p>
        <p>Anterior{previousValue}</p>
        <button onClick={() => setNumber(Math.random())}>Alterar</button>
        <hr/>
    </div>
  )
}

export default HookCustom