import React, { useEffect, useState } from "react";
import "./_relatedVideos.scss";
import { AiFillEye } from "react-icons/ai";
// import request from "../../Utils/api";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import { Col, Row } from "react-bootstrap";
import request from "../../Utils/api";
import { useNavigate } from "react-router-dom";

const RelatedVideos = ({ video, key }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${id.videoId}`);
  };

  return (
    <Row
      className="relatedVideos m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} md={6} className="relatedVideos__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="relatedVideos__thumbnail"
          wrapperClassName="relatedVideos__thumbnail-wrapper"
        />
        <span className="relatedVideos__duration">{_duration}</span>
      </Col>

      <Col xs={6} md={6} className="relatedVideos__right p-0">
        <p className="relatedVideos__title mb-1">{title}</p>
        <div className="relatedVideos__details">
          <AiFillEye /> {numeral(views).format("0.a")} Views •
          {moment(publishAt).fromNow()}
        </div>
        <div className="relatedVideos__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
          src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
          effect="blur"
        /> */}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default RelatedVideos;
