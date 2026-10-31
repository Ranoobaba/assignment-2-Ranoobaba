import menuIcon from '../assets/menu_icon.png'
import searchIcon from '../assets/search_icon.png'
import TaskCounter from './TaskCounter.jsx'

function Header({ total, completed }) {
  return (
    <header className="main-header">
      <button className="menu-button" type="button">
        <img className="header-icon" src={menuIcon} alt="Open menu" width="24" height="24" />
      </button>

      <div className="quick-find" role="search">
        <label className="quick-find-label" htmlFor="quick-find-input">
          <img className="header-icon" src={searchIcon} alt="Quick find" width="24" height="24" />
        </label>
        <input className="quick-find-input" id="quick-find-input" type="text" placeholder="Quick find" autoComplete="off" />
      </div>

      <TaskCounter total={total} completed={completed} />
    </header>
  )
}

export default Header
