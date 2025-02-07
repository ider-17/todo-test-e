export function Input({addTask, firstName, setFirstName}) {

    function handleKeyDown(e) {
        if (e.code === "Enter") {
            addTask()
        }
    }

    return (
        <>
            <input placeholder="Add a new task..." className="input-text" type="text" onKeyDown={handleKeyDown} value={firstName} onChange={e => setFirstName(e.target.value)} />
            <button className="add-button" onClick={addTask}>Add</button></>
    )
}