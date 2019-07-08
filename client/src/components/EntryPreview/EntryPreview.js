import React from 'react';
import { Link } from 'react-router-dom';

import './EntryPreview.scss';

const EntryPreview = ({ id, summary, date }) => {
    const formatDate = () => {
        let newYear = date.slice(0, 6) + date.slice(8);
        let newDate = newYear.replace(/\//g, '\n');
        return newDate;
    };

    return (
        <Link to={`/entries/${id}`}>
            <div className='entry-preview'>
                <span className='date'>{formatDate()}</span>
                <span className='summary'>
                    <span>{summary}</span>
                </span>
            </div>
        </Link>
    );
};

export default EntryPreview;
