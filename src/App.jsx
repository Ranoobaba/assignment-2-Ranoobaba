import { useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import TaskFilter from './components/TaskFilter.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import './App.css'

const INITIAL_TASKS = [
  { id: 1, text: 'Call Mom', completed: false },
  { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
  { id: 3, text: 'Return the textbook to Josie', completed: false },
  { id: 4, text: 'Buy the new album by Rake', completed: false },
  { id: 5, text: 'Buy a gift card for Dad', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [filter, setFilter] = useState('All')

  const completedCount = tasks.filter((task) => task.completed).length

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'Active') {
      return !task.completed
    }
    if (filter === 'Completed') {
      return task.completed
    }
    return true
  })

  function handleAddTask(text) {
    setTasks((currentTasks) => {
      const nextId = Math.max(0, ...currentTasks.map((task) => task.id)) + 1
      return [...currentTasks, { id: nextId, text, completed: false }]
    })
  }

  function handleToggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    )
  }

  function handleDeleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <Header total={tasks.length} completed={completedCount} />

      <div className="content-wrapper">
        <Sidebar activeCount={tasks.length - completedCount} />

        <main className="main-content">
          <section className="task-section" id="inbox" aria-labelledby="inbox-heading">
            <h1 className="section-heading" id="inbox-heading">Inbox</h1>
            <TaskFilter activeFilter={filter} onFilterChange={setFilter} />
            <TaskList tasks={visibleTasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
            <TaskForm onAddTask={handleAddTask} />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
