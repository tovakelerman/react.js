import React from 'react';

function TaskList({ tasks, onToggleTask }) {
  // מציג את רשימת המשימות מהמערך שמגיע ב-props.
  // כל משימה כוללת checkbox שהלחיצה עליו מפעילה את onToggleTask —
  // פונקציית ה-toggle שמתקבלת מ-App ומשנה את מצב אותה משימה.
  return (
    <div className="task-list-container">
      <h3 className="task-list-title">Task List:</h3>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {/* קבוצת הסימון + הכותרת בצד אחד של הפריט */}
            <div className="task-check">
              {/* ה-checkbox מציג את המצב הנוכחי, והלחיצה הופכת אותו */}
              <input
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
              />
              <span className="task-title">{task.title}</span>
            </div>
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