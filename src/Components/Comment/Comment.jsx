import moment from "moment";
import React from "react";
import "./_comment.scss"

const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
        alt=""
        className="rounded-circle mr-3"
      />

      <div className="comment__body">
        <p className="comment__header mb-1">Patrick Ben •{moment("2020-06-5").fromNow()}</p>
        <p className="mb-0">Nice Video</p>
         
      </div>
    </div>
  );
};

export default Comment;
