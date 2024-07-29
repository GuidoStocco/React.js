import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15);
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
        </div>
        <div>
            <p>valor2: {number}</p>
            <button onClick={() => setNumber(25)} style={{padding:20}}></button>
        </div>
    </div>
  );
}

export default ManageData