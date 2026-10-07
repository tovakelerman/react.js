import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import TaskSummary from './TaskSummary';
import './App.css'

function App() {


  // נתונים סטטיים של המשתמש
  const userName = "Tovi";
  // מערך סטטי של משימות
const tasks = [
  { id: 1, title: "Buy groceries", completed: true },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Clean the room", completed: true },
  { id: 4, title: "Submit homework", completed: false },
  { id: 5, title: "Review React documentation", completed: false },
  { id: 6, title: "Practice array methods", completed: true },
  { id: 7, title: "Design application layout", completed: true },
  { id: 8, title: "Fix component styling", completed: false }
];
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', direction: 'rtl' }}>
      {/* העברת שם המשתמש כ-prop לקומפוננטת הכותרת */}
      <Header userName={userName} />

      {/* העברת מערך המשימות לקומפוננטת הסיכום */}
      <TaskSummary tasks={tasks} />

      {/* העברת מערך המשימות לקומפוננטת הרשימה */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App
