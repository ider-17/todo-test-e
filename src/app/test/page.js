'use client';

import { useState } from "react";

export default function Home() {

    const [tasks, setTasks] = useState("")

    function addTask() {
        const addNewTask = prompt("Task?");
        const addTasks = [{text: addNewTask, isCompleted: false, id: "1"}];
        

    };

    return (
        <div>
            <button onClick={addTask}>Add</button>
        </div>
    )
}