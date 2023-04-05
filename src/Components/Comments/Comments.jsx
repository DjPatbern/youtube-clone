import React from "react";
import Comment from "../Comment/Comment";
import "./_comments.scss"

const Comments = () => {
  const handleComment = () => {}
  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="comment__form d-flex w-100 my-2">
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
          alt=""
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input type="text" className="flex-grow-1" placeholder="Write a comment..." />
          <button className="border-o p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {
          [...Array(15)].map((comment) => (<Comment />))
        }
      </div>
    </div>
  );
};

export default Comments;
