import React from "react";
import "./_videoMetadata.scss";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import numeral from "numeral";
import moment from "moment";
import ShowMoreText from "react-show-more-text";

const VideoMetadata = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  return (
    <div className="videoMetadata py-2">
      <div className="videoMetadata__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-item-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            {moment(publishAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(likeCount).format("0.a")}
            </span>

            <span className="mr-3" style={{ paddingLeft: "10px" }}>
              <MdThumbDown size={26} />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetadata__channel d-flex justify-content-between align-item-center my-2 py-2">
        <div className="d-flex">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
            alt=""
            className="rounded-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>{numeral(1000).format("0.a")} Subscribers</span>
          </div>
          <button className="btn border-0 p-2 m-2">Subscribe</button>
        </div>
      </div>
      <div className="videoMetadata__description">
        <ShowMoreText
          lines={3}
          more="Show More"
          less="Show Less"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetadata;
