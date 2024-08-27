// src/Comment.js

import React from "react";

const Comment = ({ comment }: { comment: any }) => {
  const { user, text, image } = comment;

  return (
    <div>
      <div className="flex">
        <img
          src={image}
          alt={user}
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            marginRight: "10px",
          }}
        />
        <div>
          <strong>{user}</strong>
          <p className="max-w-[700px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
