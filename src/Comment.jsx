const Comment = ({ comment, level = 1 }) => {
  return (
    <div
      style={{ paddingLeft: level * 10 }}
      className="flex w-full flex-wrap mt-4 border-l-2 py-1 bg-gray-100"
    >
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt=""
        width="50"
      />
      <div className="ml-3">
        <p>{comment.name}</p>
        <p>{comment.text}</p>
      </div>
      {comment.replies &&
        comment.replies.map((reply, index) => (
          <Comment key={index} comment={reply} level={level + 1} />
        ))}
    </div>
  );
};
export default Comment;
