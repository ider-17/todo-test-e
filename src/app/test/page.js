'use client';

import { useState } from "react";

const initialTasks = [];

export default function Home() {
    const [firstName, setFirstName] = useState('')
    const [tasks, setTasks] = useState(initialTasks);

    function addTask() {
        const addTask = firstName
        if (addTask) {
            const addTaskList = [{ task: addTask, completed: false, id: new Date().toISOString() }, ...tasks]
            setTasks(addTaskList)
        }
        setFirstName("")
    }

    function editTask(index) {
        const editTask = prompt("Edit Task?", tasks[index].task)
        if (editTask) {
            const clonedTask = [...tasks]
            clonedTask[index].task = editTask
            setTasks(clonedTask)
        }
    }

    function deleteTask(id) {
        if (confirm("Are You Sure?")) {
            const clonedTask = tasks.filter((task) => task.id !== id)
            setTasks(clonedTask)
        }
    }

    function toggleCompleted(index) {
        const clonedTask = [...tasks]
        clonedTask[index].completed = !clonedTask[index].completed
        setTasks(clonedTask)
    }

    function handleKeyDown(e) {
        if (e.code === "Enter") {
            addTask()
        }
    }

    function filterAll() {
        setTasks(tasks)
    }

    // function filterActive() {
    //     console.log(tasks, "here")
    //     tasks.filter([index].completed === false).map(task => {task})
    //     }
    // }

    return (
        <div>
            <input type="text" onKeyDown={handleKeyDown} value={firstName} onChange={e => setFirstName(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <div>
                <button onClick={filterAll}>All</button>
                {/* <button onClick={filterActive}>Active</button> */}
                <button>Completed</button>
            </div>
            {tasks.map((task, index) =>
                <div key={task.id} className="task">
                    <input type="checkbox" checked={task.completed} onChange={() => toggleCompleted(index)} />
                    <span className={task.completed ? "checkbox" : ''}>{task.task}</span>
                    <button onClick={() => editTask(index)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>)}
        </div>
    )
}