function TaskItem({ task, onToggleTask, onDeleteTask }) {
  const checkboxId = `task-${task.id}`

  return (
    <li className="task-item">
      <input
        className="task-checkbox"
        id={checkboxId}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <label className="task-label" htmlFor={checkboxId}>{task.text}</label>
      <button
        className="task-delete"
        type="button"
        aria-label={`Delete ${task.text}`}
        onClick={() => onDeleteTask(task.id)}
      >
        ×
      </button>
    </li>
  )
}

export default TaskItem
