import { useState } from 'react';

/**
 * TaskForm
 * --------
 * קומפוננטת טופס ליצירת משימה חדשה.
 * מחזיקה את הטקסט המוקלד בסטייט מקומי, וכשהטופס נשלח
 * היא קוראת ל-onAddTask עם התיאור, ואז מאפסת את השדה.
 */
function TaskForm({ onAddTask }) {
  // הסטייט המקומי מחזיק את תיאור המשימה שהמשתמש מקליד
  const [description, setDescription] = useState('');

  // הטיפול בשמירת הטקסט בכל לחיצת מקש
  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  // הטיפול בשליחת הטופס
  const handleSubmit = (event) => {
    // מונעים את רענון הדף כברירת המחדל של submission בטפסים
    event.preventDefault();

    // מתעלמים מהגשות ריקות או עם רווחים בלבד
    if (description.trim() === '') return;

    // מעלים את התיאור אל ההורה כדי שיצור את המשימה החדשה
    onAddTask(description.trim());

    // איפוס שדה הקלט לאחר שהוספנו את המשימה
    setDescription('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-description">New Task:</label>

      {/* שדה מבוקר: הערך מהסטייט, onChange כותב אותו בחזרה */}
      <input
        id="task-description"
        type="text"
        placeholder="Describe the task..."
        value={description}
        onChange={handleChange}
      />

      {/* הלחיצה על הכפתור שולחת את הטופס ומפעילה את handleSubmit */}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
