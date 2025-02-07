import { Tasks } from "../Tasks";

export function TaskList({ filteredTasks, toggleCompleted, editTask, deleteTask, onClickAll, setStatus, status }) {

    return (
        <>
            <div className="filter-buttons">
                <button onClick={() => { onClickAll(); setStatus('All'); }} className={`btn ${status === 'All' ? "clicked-button" : ""}`}>All</button>
                <button onClick={() => { onClickAll(); setStatus('Active'); }} className={`btn ${status === 'Active' ? "clicked-button" : ""}`}>Active</button>
                <button onClick={() => { onClickAll(); setStatus('Completed'); }} className={`btn ${status === 'Completed' ? "clicked-button" : ""}`}>Completed</button>
            </div>
            <>
                <Tasks deleteTask={deleteTask} editTask={editTask} toggleCompleted={toggleCompleted} filteredTasks={filteredTasks} />
            </>
        </>
    )
}