import React, {useState} from 'react'


const AddTask = ({todo, setTodo}) => {
    const [value, setValue] = useState('')
    const saveTodo = () => {
        setTodo(
            [...todo, {
                id: Math.random().toString(36).substring(2, 9),
                title: value,
                status: 'incomplete'
            }]

        )
        return(
            setValue('')
        )
    }
    return (
        <div>

            <input placeholder='Введите задачу' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={saveTodo}>Сохранить</button>
        </div>
    )
}

export default AddTask;