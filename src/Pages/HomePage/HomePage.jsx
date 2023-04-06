import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CatagoriesBar from "../../Components/CategoriesBar/CategoriesBar";
import Videos from "../../Components/Videos/Videos";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  // getVideosByCategory,
} from "../../redux/actions/videos.action";
import Loading from "../../Components/Loading/Loadinig";
// import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, loading } = useSelector((state) => state.homeVideos);

  //   const fetchData = () => {
  //     if (activeCategory == "All") dispatch(getPopularVideos());
  //     else {
  //       dispatch(getVideosByCategory(activeCategory));
  //     }
  //   };
  return (
    <Container>
      <CatagoriesBar />
      <Row>
        {/* <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        Loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      > */}
        {!loading ? (
          videos.map((video) => (
            <Col lg={4} md={5} key={video.id}>
              <Videos video={video} />
            </Col>
          ))
        ) : (
          <Loading />
        )}
        {/* </InfiniteScroll> */}
      </Row>
    </Container>
  );
};

export default HomePage;
