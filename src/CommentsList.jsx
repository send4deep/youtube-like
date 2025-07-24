import Comment from "./Comment";

const commentsData = [
  {
    name: "Deepak Mishra",
    text: "Comment is the dummy comments.",
    replies: [
      {
        name: "Deepak Mishra",
        text: "Comment is the dummy comments.",
        replies: [
          {
            name: "Deepak Mishra",
            text: "Comment is the dummy comments.",
            replies: [],
          },
          {
            name: "Deepak Mishra",
            text: "Comment is the dummy comments.",
            replies: [],
          },
        ],
      },
      {
        name: "Deepak Mishra",
        text: "Comment is the dummy comments.",
        replies: [
          {
            name: "Deepak Mishra",
            text: "Comment is the dummy comments.",
            replies: [],
          },
        ],
      },
      {
        name: "Deepak Mishra",
        text: "Comment is the dummy comments.",
        replies: [],
      },
    ],
  },
  {
    name: "Deepak Mishra",
    text: "Comment is the dummy comments.",
    replies: [
      {
        name: "Deepak Mishra",
        text: "Comment is the dummy comments.",
        replies: [],
      },
      {
        name: "Deepak Mishra",
        text: "Comment is the dummy comments.",
        replies: [
          {
            name: "Deepak Mishra",
            text: "Comment is the dummy comments.",
            replies: [],
          },
        ],
      },
      {
        name: "Deepak Mishra",
        text: "Comment is the dummy comments.",
        replies: [],
      },
    ],
  },
  {
    name: "Deepak Mishra",
    text: "Comment is the dummy comments.",
    replies: [],
  },
  {
    name: "Deepak Mishra",
    text: "Comment is the dummy comments.",
    replies: [],
  },
  {
    name: "Deepak Mishra",
    text: "Comment is the dummy comments.",
    replies: [],
  },
  {
    name: "Deepak Mishra",
    text: "Comment is the dummy comments.",
    replies: [],
  },
];

const CommentsList = () => {
  return (
    <div>
      <h1 className="font-bold mt-5 text-2xl">Comments:</h1>
      {commentsData.map((data, index) => (
        <Comment key={index} comment={data} />
      ))}
    </div>
  );
};
export default CommentsList;
