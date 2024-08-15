import { useReducer, useState } from "react";


const HookUseReducer = () => {

    const [number, despetch] = useReducer((state, action) => {
        return Math.random(state)
    })

    //avançando em reducer
    const initialTasks = [
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Outra coisa"}
    ];

    const taskReducer = (state, action) => {

        switch (action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                };

                setTaskText('');

                return [...state, newTask]
        }

    }

    const [taskText, setTaskText] = useState('');
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatchTask({type: "ADD"});
    }

    return( 
        <div>
            <h1>UseReducer</h1> 
            <p>Número: {number}</p>    
            <button onClick={despetch}>Alterar o número!</button>
            <hr/>
            <h3>Tarefas:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
                <input type="submit" value='enviar' />
            </form>
            {tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
            ))}
        </div>
    )
};

export default HookUseReducer;