import React, { useEffect } from "react";
import "./watchPage.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetadata from "../../Components/VideoMetadata/VideoMetadata";
import RelatedVideos from "../../Components/RelatedVideos/RelatedVideos";
import Comments from "../../Components/Comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedVideos,
  getVideoById,
} from "../../redux/actions/videos.action";
import Loading from "../../Components/Loading/Loadinig";

const WatchPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);

  const { videos, loading: relatedVideoLoading } = useSelector(
    (state) => state.relatedVideo
  );

  return (
    <Row>
      <Col lg={8}>
        <div className="watchPage__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? <VideoMetadata video={video} videoId={id} /> : ""}

        <Comments videoId={id} />
      </Col>

      <Col lg={4}>
        {!relatedVideoLoading &&
          videos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <RelatedVideos video={video} key={video.id.videoId} />
            ))}
      </Col>
    </Row>
  );
};

export default WatchPage;
