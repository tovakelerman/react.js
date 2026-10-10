function Header(props) {
  // מקבל את שם המשתמש דרך props ומציג אותו בכותרת המשנה
  return (
    <header className="header-container">
      <h1 className="header-title">Task Management System</h1>
      <h2 className="header-subtitle">Hello, {props.userName}!</h2>
    </header>
  );
}

export default Header;