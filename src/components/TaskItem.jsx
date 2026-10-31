function TaskItem({ task }) {
  const checkboxId = `task-${task.id}`

  return (
    <li className="task-item">
      <input className="task-checkbox" id={checkboxId} type="checkbox" checked={task.completed} readOnly />
      <label className="task-label" htmlFor={checkboxId}>{task.text}</label>
    </li>
  )
}

export default TaskItem
