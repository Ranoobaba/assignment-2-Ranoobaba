import checkIcon from '../assets/check_icon.png'

function TaskCounter({ total, completed }) {
  return (
    <p className="task-counter">
      <img className="header-icon" src={checkIcon} alt="Total tasks / completed:" width="24" height="24" />
      {total}/{completed}
    </p>
  )
}

export default TaskCounter
