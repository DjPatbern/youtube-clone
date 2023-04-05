import React from "react";
import "./_relatedVideos.scss";
import { AiFillEye } from "react-icons/ai";
// import request from "../../Utils/api";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import { Col, Row } from "react-bootstrap";

const RelatedVideos = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="relatedVideos m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="relatedVideos__left">
        <LazyLoadImage
          src="https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg"
          effect="blur"
          className="relatedVideos__thumbnail"
          wrapperClassName="relatedVideos__thumbnail-wrapper"
        />
        <span className="relativeVideos__duration">{_duration}</span>
      </Col>

      <Col xs={6} md={8} className="relatedVideos__right p-0">
        <p className="relatedVideos__title mb-1">
          Study React and get a certificate
        </p>
        <div className="relatedVideos__details">
          <AiFillEye /> {numeral(100000).format("0.a")} Views •
          {moment("2020-10-9").fromNow()}
        </div>
        <div className="relatedVideos__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
          src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
          effect="blur"
        /> */}
          <p>Patrick Codes</p>
        </div>
      </Col>
    </Row>
  );
};

export default RelatedVideos;
