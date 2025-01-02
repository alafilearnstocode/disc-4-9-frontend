import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import UserList from "./UserList";
import FollowersPage from "./FollowersPage";

const App = () => {
  return (
    <Router>
      <main className="followers-page">
        <header className="header">
          <button aria-label="Go back" className="back-button">&larr;</button>
          <h1>Arnaud Cossette</h1>
        </header>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
