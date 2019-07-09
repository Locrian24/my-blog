import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './EntryNav.scss';

const EntryNav = ({
    currentPage,
    totalPosts,
    postsPerPage,
    shiftCurrentEntries,
    shiftDir,
    arrowIcon
}) => {
    const [shift, setShift] = useState(0);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (shiftDir > 0) {
            setShift(1);
            currentPage < Math.ceil(totalPosts / postsPerPage)
                ? setDisabled(false)
                : setDisabled(true);
        } else if (shiftDir < 0) {
            setShift(-1);
            currentPage > 1 ? setDisabled(false) : setDisabled(true);
        }
    }, [currentPage, postsPerPage, shiftDir, totalPosts]);

    return (
        <React.Fragment>
            <div
                className={'nav-arrow ' + (disabled && 'disabled')}
                onClick={() => {
                    if (!disabled) shiftCurrentEntries(currentPage + shift);
                }}
            >
                <FontAwesomeIcon icon={arrowIcon} size='3x' />
            </div>
        </React.Fragment>
    );
};

export default EntryNav;
