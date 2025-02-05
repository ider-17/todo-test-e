'use client';

import { Duru_Sans } from "next/font/google";
import { useState } from "react";

const initialTasks = [
  {
    text: "Hogoo shuurdeh",
    completed: false,
    id: "2024-02-05 34 345"
  },
  {
    text: "Aygaa ugaah",
    completed: false,
    id: "2024-02-05 34 345"
  }
];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  function addTask() {
    const newTaskText = prompt("Task?");
    const newTasks = [newTaskText, ...tasks];
    setTasks(newTasks);
  }

  function editTask() {
    tasks[index]
  }
  return (
    <div>
      <button onClick={addTask}>Add</button>

      {tasks.map((task, index) => (
        <div key={task.id} className="task">
          <input type="checkbox" />

          {task.text}

          <button onClick={() => editTask(index)}>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
