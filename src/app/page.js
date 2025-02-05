'use client';

import { useState } from "react";

const initialTasks = [];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  function addTask() {
    const newTaskText = prompt("Task?");
    const newTasks = [{ text: newTaskText, completed: false, id: "ksadj" }, ...tasks];
    setTasks(newTasks);
  }
  
  
  function editTask(index) {
    const updatedTaskText = prompt("Task?", tasks[index].text);
    
    if (updatedTaskText) {
      const clonedTasks = [...tasks];
      clonedTasks[index].text = updatedTaskText;
      setTasks(clonedTasks);
    }
  }
  
  function deleteTask(id) {
    if (confirm("Are you sure?")) {
      const clonedTasks = tasks.filter((task) => task.id !== id);
      setTasks(clonedTasks);
    }
  }
  
  return (
    <div>
      <button onClick={addTask}>Add</button>

      {tasks.map((task, index) => (
        <div key={task.id} className="task">
          <input type="checkbox" />

          {task.text}

          <button onClick={() => editTask(index)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
