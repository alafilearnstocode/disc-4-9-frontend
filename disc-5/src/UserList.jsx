import React, { useState, useEffect } from "react";

const UserList = () => {
  
  const hardcodedUsers = [
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

 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [followStates, setFollowStates] = useState({});

 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users");
        const data = await response.json();
        setUsers(data);

  
        const initialFollowStates = data.reduce((acc, user) => ({ ...acc, [user.id]: false }), {});
        setFollowStates(initialFollowStates);
      } catch (error) {
        console.error("Error fetching users:", error);

   
        setUsers(hardcodedUsers);
        const fallbackFollowStates = hardcodedUsers.reduce(
          (acc, user) => ({ ...acc, [user.id]: false }),
          {}
        );
        setFollowStates(fallbackFollowStates);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleFollow = (id) => {
    setFollowStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section id="users-you-know" className="user-list">
      {users.map((user) => (
        <article key={user.id} className="user-card">
          <img src={user.profilePic || user.profilePicture} alt={user.name || `${user.firstName} ${user.lastName}`} className="profile-pic" />
          <div className="user-info">
            <h2>{user.name || `${user.firstName} ${user.lastName}`}</h2>
            <p>{user.username || `@${user.email.split("@")[0]}`}</p>
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

export default UserList;
