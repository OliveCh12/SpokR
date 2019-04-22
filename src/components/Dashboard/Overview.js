import React from "react";

import StoryList from "./StoryList";
import StoryPreview from "./StoryPreview";
import TypeWriter from "../Elements/Typewriter";

const container = {
  flex: 1,
};
const sideBar = {
  background: "#EDEFF8",
  height: "100%",
  overflow: "auto",
};
const Overview = () => {
  return (
    <div className="row no-gutters" style={container}>
      <div className="col-lg-4" style={sideBar}>
        <StoryList />
        <StoryList />
      </div>
      <div className="col-lg-8 section-dynamic">
        <StoryPreview />
        <TypeWriter
          rows="3"
          limit={150}
          value=""
          placeholder="Once uppon a time in the middle west..."
        />
      </div>
    </div>
  );
};

export default Overview;
