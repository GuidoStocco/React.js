import {useState} from 'react';

const ListRender = () => {

    const [list] = useState(["Guido", "Matheus", "Lucas"]);

  return (
    <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
  );
}

export default ListRender