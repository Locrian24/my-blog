import React from 'react';
import { Link } from 'react-router-dom';

const EntryPreview = ({ id, title, date }) => {
    return (
        <Link to={`/entries/${id}`}>
            <div className='mt-3'>
                <div>{title}</div>
                <p>{date}</p>
            </div>
        </Link>
    );
};

export default EntryPreview;
