import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../../redux/actions/videos.action";
import { Container } from "react-bootstrap";
import RelatedVideos from "../../Components/RelatedVideos/RelatedVideos";
import Loading from "../../Components/Loading/Loadinig";

const Search = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.searchVideos);

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);
  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <RelatedVideos video={video} key={video.id.videoId} searchPage />
        ))
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Search;
