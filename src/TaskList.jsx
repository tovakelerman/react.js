import React from 'react';

function TaskList(props) {
  return (
    <div className="task-list-container">
      <h3 className="task-list-title">Task List:</h3>
      <ul className="task-list">
        {props.tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className="task-title">{task.title}</span>
            <span className={`status-badge ${task.completed ? 'completed' : 'in-progress'}`}>
              {task.completed ? "Completed" : "In Progress"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;