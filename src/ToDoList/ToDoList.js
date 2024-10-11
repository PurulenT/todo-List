import React from 'react'

const ToDoList = ({todo, setTodo}) => {

    const deleteTodo = (id) => {
        let newTodo = todo.filter(item => item.id != id)
        setTodo(newTodo);
    }

    const completeTodo = (id) => {
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = 'complete';
            }
            return item;
        })
        setTodo(newTodo);
    }


    return (
        <div>
            {
                todo.map(item => {
                    return (
                        <div key={item.id}>
                            <div>
                                {item.title}
                                <button onClick={() => deleteTodo(item.id)}>Удалить</button>
                                <button onClick={() => completeTodo(item.id)}>Закрыть задачу</button>
                                {item.status}
                            </div>
                        </div>

                    )
                })

            }
        </div>
    )
}

export default ToDoList;