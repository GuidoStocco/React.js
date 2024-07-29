import {useState} from 'react';

const ListRender = () => {

    const [list] = useState(["Guido", "Matheus", "Lucas"]);

    const [users] = useState([
        {id:1, nome: 'guido', age: 24},
        {id:13213, nome: 'gabriel', age: 15},
        {id:13323, nome: 'diogo', age: 20},
    ])

  return (
    <div>
    <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>

    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.nome} - {user.age}</li>
        ))}
    </ul>
    </div>
  );
}

export default ListRender