export function Tasks({ filteredTasks, toggleCompleted, editTask, deleteTask }) {
    {
        filteredTasks.map((task, index) =>
            <div key={task.id} className="task">
                <input type="checkbox" checked={task.completed} onChange={() => toggleCompleted(index)} />
                <span className={task.completed ? "checkbox" : ''}>{task.task}</span>
                <button className="edit-button" onClick={() => editTask(index)}>Edit</button>
                <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>)
    }
}