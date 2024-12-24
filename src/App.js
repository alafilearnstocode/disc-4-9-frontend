import React, { useState, useEffect } from "react";
import "./App.css";

// NavBar Component
const NavBar = () => {
  return (
    <nav className="tabs" aria-label="Followers navigation">
      <ul>
        <li><a href="#users-you-know" className="active">Users you know</a></li>
        <li><a href="#followers">Followers</a></li>
        <li><a href="#following">Following</a></li>
      </ul>
    </nav>
  );
};

// UserList Component
const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Max Dominguez",
      username: "@dominguezmax",
      bio: "NU ’28 | D1 Soccer Athlete",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Luca Digne",
      username: "@dignemaintenant",
      bio: "Exchange student from Sciences Po",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Duncan Ferguson",
      username: "@techfanaticfergie",
      bio: "CS major | Tech enthusiast",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Honoured Chikwava",
      username: "@honoured.chikwava",
      bio: "NU ’28 | You reap what you sow!",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Patrick Memusi",
      username: "@thatkenyan",
      bio: "NU ’26 | Video game enthusiast",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      id: 6,
      name: "Jay Rodriguez",
      username: "@jayonbeats",
      bio: "Avid reader & Musician",
      profilePic: "https://via.placeholder.com/50",
    },
  ];

  const [followStates, setFollowStates] = useState(
    users.reduce((acc, user) => ({ ...acc, [user.id]: false }), {})
  );

  const toggleFollow = (id) => {
    setFollowStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="users-you-know" className="user-list">
      {users.map((user) => (
        <article key={user.id} className="user-card">
          <img src={user.profilePic} alt={user.name} className="profile-pic" />
          <div className="user-info">
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.bio}</p>
          </div>
          <button
            className={`follow-button ${followStates[user.id] ? "following" : ""}`}
            onClick={() => toggleFollow(user.id)}
          >
            {followStates[user.id] ? "Following" : "Follow"}
          </button>
        </article>
      ))}
    </section>
  );
};

// App Component
const App = () => {
  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <main className="followers-page">
      <header className="header">
        <button aria-label="Go back" className="back-button">&larr;</button>
        <h1>Arnaud Cossette</h1>
      </header>
      <NavBar />
      <UserList />
    </main>
  );
};

export default App;
