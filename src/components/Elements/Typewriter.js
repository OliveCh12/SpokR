import React, { useState, useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare} from "@fortawesome/free-solid-svg-icons";

library.add(faShare);

const Typewriter = ({ rows, value, limit, placeholder }) => {
  const [content, setContent] = useState(value);

  const setFormattedContent = text => {
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
  };

  const percentage = (num, total) => {
    return Math.floor((num / total) * 100);
  };

  useEffect(() => {
    setFormattedContent(content);
  }, []);

  // Style
  const progress = {
    height: "5px",
    borderRadius: "0px"
  };

  const progressBarLength = {
    background: "#8d9bf3",
    width: percentage(content.length, limit) + "%",
  };
//   const progressBarTime = {
//     background: "#f0ca41",
//     width: time + "%"
//   };

  return (
    <div className="typewritter">
      <div className="progress" style={progress}>
        <div
          className="progress-bar"
          role="progressbar"
          style={progressBarLength}
          aria-valuenow={content.length}
          aria-valuemin="0"
          aria-valuemax={limit}
        />
      </div>
      {/* <div className="progress" style={progress}>
        <div
          className="progress-bar"
          role="progressbar"
          style={progressBarTime}
          aria-valuenow={time}
          aria-valuemin="0"
        />
      </div> */}
      <div className="input-group">
        <textarea
          className="form-control"
          rows={rows}
          placeholder={placeholder}
          onChange={event => setFormattedContent(event.target.value)}
          value={content}
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-warning" type="button" id="button-addon2" style={{width: "150px"}}>
            Submit
            <FontAwesomeIcon icon="share" className="ml-2"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Typewriter;
