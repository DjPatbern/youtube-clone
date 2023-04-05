import React, { useState } from "react";
import "./_categoriesBar.scss";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

const keyword = [
  "All",
  "Reactjs",
  "Vue",
  "JavaScript",
  "HTML",
  "CSS",
  "Football",
  "Technology",
  "Industries",
  "Barcelona",
  "Politics",
  "Lagos",
  "Redux",
  "API",
  "Redux",
];

const CategoriesBar = () => {
  const [active, setActive] = useState("All");

  const dispatch = useDispatch();

  const handleActive = (value) => {
    setActive(value);
    if (value == "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };
  return (
    <div className="categoriesBar">
      {keyword.map((value, i) => (
        <span
          key={i}
          onClick={() => handleActive(value)}
          className={active === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
