import Comment from "src/components/Comment";

const comments = [
  {
    id: 1,
    user: "Alice",
    text: "This is a comment.",
    image: "https://via.placeholder.com/50",
    replies: [
      {
        id: 2,
        user: "Bob",
        text: "This is a reply to Alice.",
        image: "https://via.placeholder.com/50",
        replies: [
          {
            id: 3,
            user: "Charlie",
            text: "This is a reply to Bob.",
            image: "https://via.placeholder.com/50",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    user: "David",
    text: "Another top-level comment.",
    image: "https://via.placeholder.com/50",
    replies: [],
  },
];

const CommentList = () => {
  return (
    <div>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
