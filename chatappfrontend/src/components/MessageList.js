import React, { useState } from "react";

function MessageList({ messages }) {
  const [likes, setLikes] = useState({}); // To store like counts

  const handleLikeClick = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: (prevLikes[index] || 0) + 1,
    }));
  };

  return (
    <div className="message-list">
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <div className="name-div">
              <div className="img-div">{message.username}</div>
              <strong>{message.username}:</strong>
            </div>
            <div className="chat-box">
              {message.message}
              <div>
                <button onClick={() => handleLikeClick(index)}>👍🏻</button>
                <span className="like-count">{likes[index] || 0}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
