'use client';

import { useState } from "react";
import { Input } from "./Input";
import { TaskList } from "./TaskList";

const initialTasks = [];

export default function Home() {
    const [tasks, setTasks] = useState(initialTasks);
    const [firstName, setFirstName] = useState('')
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [status, setStatus] = useState('All');

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

    function addTask() {
        const addTask = firstName
        if (addTask) {
            const addTaskList = [{ task: addTask, completed: false, id: new Date().toISOString() }, ...filteredTasks]
            setFilteredTasks(addTaskList)
        }
        setFirstName("")
    }

    function toggleCompleted(index) {
        const clonedTask = [...filteredTasks]
        clonedTask[index].completed = !clonedTask[index].completed
        setTasks(clonedTask)
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
                <Input setFirstName={setFirstName} firstName={firstName} addTask={addTask} />
            </div>
            <TaskList status={status} setStatus={setStatus} onClickAll={onClickAll} deleteTask={deleteTask} editTask={editTask} toggleCompleted={toggleCompleted} filteredTasks={filteredTasks} />
            <div className="sponsor-text">
                <p>Powered by</p>
                <p className="blue-text">Pinecone academy</p>
            </div>
        </div>
    )
}