// src/Comment.js

import React from "react";

const Comment = ({ comment }: { comment: any }) => {
  const { user, text, image, replies } = comment;

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
          <p>{text}</p>
          <div>phản hồi</div>
        </div>
      </div>

      {replies && replies.length > 0 && (
        <div style={{ marginLeft: "20px" }}>
          {replies.map((reply: any) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
