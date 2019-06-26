import React from 'react'
import { Link } from 'react-router-dom';

const EntryPreview = ({ id, title, date }) => {
    
    return (
        <Link to={`/entries/${id}`}>
            <div className="card mt-3">
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <p className="card-text">
                        {date}
                    </p>    
                </div>
            </div>
        </Link>
    );
}

export default EntryPreview;