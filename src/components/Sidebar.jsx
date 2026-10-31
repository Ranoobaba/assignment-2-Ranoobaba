import calendarIcon from '../assets/calendar_icon.png'
import inboxIcon from '../assets/inbox_icon.png'
import upcomingIcon from '../assets/upcoming_icon.png'

function Sidebar({ activeCount }) {
  return (
    <nav className="sidebar" aria-label="Task categories">
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link nav-link-active" href="#inbox" aria-current="page">
            <img className="nav-icon" src={inboxIcon} alt="" width="24" height="24" />
            Inbox
            <span className="nav-count">{activeCount}</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#today">
            <img className="nav-icon" src={calendarIcon} alt="" width="24" height="24" />
            Today
            <span className="nav-count">{activeCount}</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#upcoming">
            <img className="nav-icon" src={upcomingIcon} alt="" width="24" height="24" />
            Upcoming
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
