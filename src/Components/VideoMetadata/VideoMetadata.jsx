import React, { useEffect } from "react";
import "./_videoMetadata.scss";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import numeral from "numeral";
import moment from "moment";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import {
  checkDescriptionStatus,
  getChannelDetails,
} from "../../redux/actions/channel.action";

const VideoMetadata = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch();

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);

  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkDescriptionStatus(channelId));
  }, [dispatch, channelId]);

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
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
          <button
            className={`btn border-0 p-2 m-2 ${
              subscriptionStatus && "btn-gray"
            }`}
          >
            {subscriptionStatus ? "Subscribed" : "Subscribe"}
          </button>
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
