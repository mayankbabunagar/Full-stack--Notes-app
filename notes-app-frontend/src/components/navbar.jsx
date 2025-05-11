import React from "react";
import { Link } from "react-router-dom";
function Navbar({isloggedin, logout}){
    return(
        <nav className="Nav-bar">
            <div className="navbarlogo">
                <Link to="/">MyApp</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/"  >Home</Link></li>
            {!isloggedin ? (
                <>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                </>
            ) : (
                <li>
                <button onClick={logout}>logout</button>
                </li>
            )}
            </ul>
        </nav>

    );

}
export default Navbar;
// src/
// ├── components/
// │   ├── Navbar.jsx
// │   ├── LoginForm.jsx
// │   ├── RegisterForm.jsx
// │   ├── NotesList.jsx
// │   ├── NoteItem.jsx
// │   ├── AddNoteForm.jsx
// │   └── EditNoteForm.jsx
// ├── pages/
// │   ├── HomePage.jsx
// │   ├── LoginPage.jsx
// │   └── RegisterPage.jsx
// ├── api/
// │   └── axios.js
// ├── App.jsx
// └── index.js