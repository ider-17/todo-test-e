'use client';

import { useState } from "react";

const initialTasks = [];

export default function Home() {
    const [firstName, setFirstName] = useState('')
    const [tasks, setTasks] = useState(initialTasks);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [status, setStatus] = useState('All');

    function addTask() {
        const addTask = firstName
        if (addTask) {
            const addTaskList = [{ task: addTask, completed: false, id: new Date().toISOString() }, ...filteredTasks]
            setFilteredTasks(addTaskList)
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
            setFilteredTasks(clonedTask)
        }
    }

    function toggleCompleted(index) {
        const clonedTask = [...filteredTasks]
        clonedTask[index].completed = !clonedTask[index].completed
        setTasks(clonedTask)
    }

    function handleKeyDown(e) {
        if (e.code === "Enter") {
            addTask()
        }
    }

    function onClickAll() {
        setFilteredTasks(tasks)
    }

    function onClickActive() {
        const filteredArray = tasks.filter(task => task.completed == false)
        setFilteredTasks(filteredArray)
    }

    function onClickCompleted() {
        const filteredCompleted = tasks.filter(task => task.completed == true)
        setFilteredTasks(filteredCompleted)
    }

    return (
        <div className="container">
            <h6>To Do List</h6>
            <div className="input-container">
                <input placeholder="Add a new task..." className="input-text" type="text" onKeyDown={handleKeyDown} value={firstName} onChange={e => setFirstName(e.target.value)} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <div className="filter-buttons">
                <button onClick={() => { onClickAll(); setStatus('All'); }} className={`btn ${status === 'All' ? "clicked-button" : ""}`}>All</button>
                <button onClick={() => { onClickAll(); setStatus('Active'); }} className={`btn ${status === 'Active' ? "clicked-button" : ""}`}>Active</button>
                <button onClick={() => { onClickAll(); setStatus('Completed'); }} className={`btn ${status === 'Completed' ? "clicked-button" : ""}`}>Completed</button>
            </div>
            {filteredTasks.map((task, index) =>
                <div key={task.id} className="task">
                    <input type="checkbox" checked={task.completed} onChange={() => toggleCompleted(index)} />
                    <span className={task.completed ? "checkbox" : ''}>{task.task}</span>
                    <button className="edit-button" onClick={() => editTask(index)}>Edit</button>
                    <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
                </div>)}
            <div className="sponsor-text">
                <p>Powered by</p>
                <p className="blue-text">Pinecone academy</p>
            </div>
        </div>
    )
}