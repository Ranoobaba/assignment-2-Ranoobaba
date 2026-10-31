import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedText = text.trim()
    if (trimmedText === '') {
      return
    }

    onAddTask(trimmedText)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        id="new-task-input"
        type="text"
        placeholder="Add a task"
        aria-label="New task"
        autoComplete="off"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className="task-add-button" type="submit">Add</button>
    </form>
  )
}

export default TaskForm
