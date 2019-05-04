import React from "react";
import firebase from "../database/firebase";

import { useCollection } from "react-firebase-hooks/firestore";

const FirestoreCollection = () => {
  const { error, loading, value } = useCollection(
    firebase.firestore().collection("stories")
  );
  return (
    <div>
      <p>
        {error && <strong>Error: {error}</strong>}
        {loading && (
          <div class="spinner-grow" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
        {value && (
          <span>
            Collection:{" "}
            {value.docs.map(doc => (
              <p key={doc.id}>
                {JSON.stringify(doc.data())},{" "}
              </p>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};

export default FirestoreCollection;
