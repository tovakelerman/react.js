import React from 'react';

/**
 * NameInput
 * ---------
 * קומפוננטת קלט מבוקרת. השם עצמו מוחזק על ידי ההורה (App) —
 * כאן דרך Lifting State Up — והערך והעדכון מגיעים אליה ב-props,
 * כך שגם הכותרת וגם השדה מציגים את אותו מקור אמת.
 */
function NameInput({ userName, onUserNameChange }) {
  // פונקציית השינוי: קוראת בחזרה אל ההורה עם הטקסט החדש
  // בכל לחיצת מקש, וההורה מעדכן את הסטייט המשותף.
  const handleChange = (event) => {
    onUserNameChange(event.target.value);
  };

  return (
    <section className="name-input">
      <label htmlFor="user-name">Enter your name:</label>

      {/* שדה מבוקר: הערך מגיע מ-props, onChange קורא בחזרה להורה. */}
      <input
        id="user-name"
        type="text"
        placeholder="Type here..."
        value={userName}
        onChange={handleChange}
      />

      {/* מתעדכן בכל לחיצת מקש כי הסטייט של ההורה השתנה. */}
      <h2>Hello, {userName.trim() || 'Guest'}!</h2>
    </section>
  );
}

export default NameInput;
