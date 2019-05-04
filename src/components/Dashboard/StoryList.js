import React, { useState } from "react";
import firebase from "../../database/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const defaultStoryList = {
  background: "inherit",
  border: "inherit",
  borderBottom: "1px solid rgba(0,0,0, 0.1)",
  borderRadius: "0px",
  transition: "0.3s"
};

const activeStoryList = {
  background: "#fff",
  borderBottom: "1px solid #f1f1f1f1",
  border: "inherit",
  borderRadius: "0px",
  transition: "0.3s",
  zIndex: 400
};

const StoryList = props => {
  const { error, loading, value } = useCollection(
    firebase.firestore().collection("stories")
  );

  const [active, setActive] = useState(false);

  const handleActiveCard = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <div>
      {error && <strong>Error: {error}</strong>}
      {loading && (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {value && (
        <div>
          {value.docs.map(doc => (
            <div
              className="card"
              key={doc.id}
              onClick={handleActiveCard}
              style={active ? activeStoryList : defaultStoryList}
            >
              <div className="card-body">
                <h5 className="card-title">{doc.data().title}</h5>
                <p className="card-text">
                  {doc.data().content[0][Object.keys(doc.data().content[0])[2]]}
                </p>
              </div>
              <div className="card-footer">
              Author : <span className="text-primary">{doc.data().author}</span>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoryList;
