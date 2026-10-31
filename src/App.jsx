import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
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
  const tasks = INITIAL_TASKS
  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <>
      <Header total={tasks.length} completed={completedCount} />

      <div className="content-wrapper">
        <Sidebar activeCount={tasks.length - completedCount} />

        <main className="main-content">
          <section className="task-section" id="inbox" aria-labelledby="inbox-heading">
            <h1 className="section-heading" id="inbox-heading">Inbox</h1>
            <TaskList tasks={tasks} />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
