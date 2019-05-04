import React from 'react';

import { Link } from 'react-router-dom'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faHome, faUndo } from "@fortawesome/free-solid-svg-icons";

library.add(faInbox, faHome, faUndo);

const Empty = () => {
    return (
        <div className="centered-content">
            <FontAwesomeIcon icon="inbox" size="6x"/>
            <h3>Oops, this is empty.</h3>
            <p className="text-secondary">Sorry, the page your're looking for is not existing.</p>
            <Link to="/overview" className="btn btn-warning"><FontAwesomeIcon icon="undo" className="mr-2"/>Return Home</Link>
        </div>
    );
};

export default Empty;