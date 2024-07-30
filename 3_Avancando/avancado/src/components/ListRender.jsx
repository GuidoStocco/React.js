import {useState} from 'react';

const ListRender = () => {

    const [list] = useState(["Guido", "Matheus", "Lucas"]);

    const [users, setUsers] = useState([
        {id:1, nome: 'guido', age: 24},
        {id:2, nome: 'gabriel', age: 15},
        {id:3, nome: 'diogo', age: 20},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) =>{
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

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
    <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
}

export default ListRender