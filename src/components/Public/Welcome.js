import React from 'react';

import { Link } from 'react-router-dom'

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInbox, faHome, faUndo } from "@fortawesome/free-solid-svg-icons";

// library.add(faInbox, faHome, faUndo);

const Welcome = () => {
    return (
        <div className="centered-content">
            {/* <FontAwesomeIcon icon="inbox" size="6x"/> */}
            <h3>Welcome to <strong className="text-warning">SpokR</strong></h3>
            <p className="text-secondary">It looks like you're not connected, Please Login</p>
            <small className="text-secondary">If you do not have an account, you can create one <Link to="/signup" className="text-warning">here</Link></small>
            <div className="button-group">
            {/* <Link to="/overview" className="btn btn-warning mr-2">Login</Link> */}
            </div>
        </div>
    );
};

export default Welcome;