import React from "react";
import CommentInput from "src/components/CommentInput";
import CommentList from "src/components/CommentList";

const CommentWrapper = () => {
  return (
    <div>
      <CommentInput />
      <CommentList />
    </div>
  );
};

export default CommentWrapper;
