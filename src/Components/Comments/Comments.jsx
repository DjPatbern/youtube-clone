import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import "./_comments.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVidoesByVideo,
} from "../../redux/actions/comments.action";

const Comments = ({ videoId }) => {
  const [text, setText] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    dispatch(addComment(videoId, text));
    setText("");
  };

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  useEffect(() => {
    dispatch(getCommentsOfVidoesByVideo(videoId));
  }, [videoId, dispatch]);

  const { photoURL } = useSelector((state) => state.auth.user);

  return (
    <div className="comments">
      <p>{comments?.length} Comments</p>
      <div className="comment__form d-flex w-100 my-2">
        <img src={photoURL} alt="" className="rounded-circle mr-3" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-o p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
