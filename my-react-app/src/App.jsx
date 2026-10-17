import { useState } from 'react';
import Header from './Header';
import NameInput from './NameInput';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskSummary from './TaskSummary';
import './App.css'

function App() {
  // שם המשתמש מוחזק כאן (Lifting State Up) כך ש-Header וגם
  // השדה מציגים ומעדכנים אותו מאותו מקור אמת אחד.
  const [userName, setUserName] = useState('');

  // הסטייט מחזיק את מערך המשימות — כך שינוי במצב משימה
  // יפעיל רינדור מחדש גם של הרשימה וגם של הסיכום.
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: true },
    { id: 2, title: "Learn React", completed: false },
    { id: 3, title: "Clean the room", completed: true },
    { id: 4, title: "Submit homework", completed: false },
    { id: 5, title: "Review React documentation", completed: false },
    { id: 6, title: "Practice array methods", completed: true },
    { id: 7, title: "Design application layout", completed: true },
    { id: 8, title: "Fix component styling", completed: false }
  ]);

  // פונקציית ה-toggle: מקבלת מזהה משימה, וכל לחיצה הופכת את המצב
  // (finished <-> unfinished). משתמשים ב-map כדי להחזיר מערך חדש
  // בלי לשנות (to mutate) את המערך הקיים — עקרון האימוטאביליות.
  const toggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // פונקציית הוספת משימה: מקבלת תיאור, יוצרת אובייקט משימה חדש
  // עם מזהה ייחודי, ומעדכנת את המערך. משתמשים ב-spread operator (...)
  // כדי לבנות מערך חדש (ישן + חדש) בלי לשנות את המערך הקיים.
  const addTask = (description) => {
    const newTask = {
      id: Date.now(),           // מזהה ייחודי לפי חותמת זמן
      title: description,       // התיאור שהמשתמש הקליד
      completed: false          // משימה חדשה מתחילה כלא-הושלמה
    };

    setTasks(prevTasks => [
      ...prevTasks,             // שומרים את כל המשימות הקיימות
      newTask                   // ומוסיפים את החדשה בסוף
    ]);
  };

  return (
    <div className="app-container">
      {/* כותרת עליונה עם שם המשתמש */}
      <Header userName={userName} />

      {/* קומפוננטה עם קלט שם המשתמש — סטייט מבוקר מההורה */}
      <NameInput userName={userName} onUserNameChange={setUserName} />

      {/* טופס הוספת משימה חדשה */}
      <TaskForm onAddTask={addTask} />

      {/* העברת מערך המשימות ופונקציית השינוי לקומפוננטת הסיכום */}
      <TaskSummary tasks={tasks} />

      {/* העברת מערך המשימות ופונקציית ה-toggle לרשימה */}
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  );
}

export default App
