import React from "react";
import ChatInput from "src/components/ChatInput";
import CommentList from "src/components/CommentList";

const CommentWrapper = () => {
  return (
    <div>
      <ChatInput />
      <CommentList />
    </div>
  );
};

export default CommentWrapper;
