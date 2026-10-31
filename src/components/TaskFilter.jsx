import { Fragment } from 'react'

const FILTERS = ['All', 'Active', 'Completed']

function TaskFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="task-filter" role="group" aria-label="Filter tasks">
      {FILTERS.map((filter, index) => (
        <Fragment key={filter}>
          {index > 0 && <span className="filter-separator" aria-hidden="true">|</span>}
          <button
            className={filter === activeFilter ? 'filter-button filter-button-active' : 'filter-button'}
            type="button"
            aria-pressed={filter === activeFilter}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        </Fragment>
      ))}
    </div>
  )
}

export default TaskFilter
