import Comment from "src/components/Comment";

const comments = [
  {
    id: 1,
    user: "Alice",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae eaque blanditiis tempora adipisci, ab dolor tempore architecto libero officiis! Quia beatae illo ullam, praesentium veritatis corrupti nam vitae deleniti.",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    user: "David",
    text: "Another top-level comment.",
    image: "https://via.placeholder.com/50",
  },
];

const CommentList = () => {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
