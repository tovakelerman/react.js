import React from 'react';

function TaskSummary(props) {
  // סיכום: סופרים את סך המשימות ואת אלו שהושלמו מתוך המערך שמגיע ב-props
  const totalTasks = props.tasks.length;
  const completedTasks = props.tasks.filter(task => task.completed).length;

  return (
    <div className="summary-container">
      <h3 className="summary-title">Task Summary</h3>
      <p className="summary-text">
        Total tasks: <strong>{totalTasks}</strong> | Completed: <strong>{completedTasks}</strong>
      </p>
    </div>
  );
}

export default TaskSummary;