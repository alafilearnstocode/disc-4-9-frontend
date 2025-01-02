import React, { useState, useEffect } from "react";

const FollowersPage = () => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users");
        const data = await response.json();
        setFollowers(data);
      } catch (error) {
        console.error("Error fetching followers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section id="followers" className="user-list">
      {followers.map((user) => (
        <article key={user.id} className="user-card">
          <img src={user.profilePicture} alt={user.firstName} className="profile-pic" />
          <div className="user-info">
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            <p>{user.email}</p>
            <p>{user.bio}</p>
          </div>
          <button className="follow-button">Follow</button>
        </article>
      ))}
    </section>
  );
};

export default FollowersPage;
