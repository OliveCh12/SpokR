import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);

const article = {
  padding: "5rem",
  overflow: "auto",
  height: "100%"
};


const StoryPreview = props => {
  return (
    <article className="article-window" style={article}>
      <div className="article-header">
        <span className="text-warning">
          1:30 min
          <FontAwesomeIcon className="ml-2" icon="clock" />
        </span>
        <h2 className="article-title">{props.title}</h2>
        <hr />
      </div>
      <p className="article-paragraph">
        {props.paragraph}
      </p> 
    </article>
  );
};

export default StoryPreview;
